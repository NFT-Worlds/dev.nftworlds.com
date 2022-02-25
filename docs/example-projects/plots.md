---
sidebar_position: 1
---

# Selling Plots of Land for $WRLD

The source code for this example project can be found at https://github.com/NFT-Worlds/WRLD-Example-Projects/tree/main/wrld-buy-plot.
:::tip
Get your hands dirty to learn quicker! Clone the examples repository and open this project using IntelliJ. Then run Maven `package` and install the plugin on a server.
:::

Here's a video of what this example project does:
<video controls src="/img/2022-02-22.out.mp4"></video>

## plugin.yml
This example has the following `plugin.yml` file which defines an admin-only command for selling a plot and a `/buyplot` command accessible to everyone.
```yml
name: wrld-buy-plot
version: 1.0
authors: [Jackson, ArkDev]
main: com.nftworlds.wrldplots.WRLDPlots
api-version: 1.17
depend: [WRLDPaymentsAPI, WorldGuard]

commands:
  sellplot:
    description: List the plot you're standing on up for sale.
    usage: /sellplot
    permission: wrldplots.sellplot
    default: op
  buyplot:
    description: Buy the plot you're standing on.
    usage: /buyplot
    default: true


```

## Transaction payload
This project defines a transaction payload called [PlayerBuyPlotPayload](https://github.com/NFT-Worlds/WRLD-Example-Projects/blob/main/wrld-buy-plot/src/main/java/com/nftworlds/wrldplots/PlayerBuyPlotPayload.java). It contains a single member variable that contains a `ProtectedRegion` referring to the plot the player is purchasing.
```java
public class PlayerBuyPlotPayload {
    public ProtectedRegion plotToBuy;

    public PlayerBuyPlotPayload(ProtectedRegion plotToBuy) {
        this.plotToBuy = plotToBuy;
    }
}
```

## Listing a plot for sale
:::tip
This example plugin does not create plots. You'll need to create them using the standard WorldGuard commands prior to selling them.
:::
### Finding plots from player location
We need to find the plot a player is standing on, so we define the following class that makes some WorldGuard API code reusable:
```java
public class PlotUtility {
    public static ProtectedRegion getPlotAtLocation(Location l) {
        RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();
        RegionManager regions = container.get(BukkitAdapter.adapt(l.getWorld()));
        BlockVector3 position = BlockVector3.at(l.getX(), l.getY(), l.getZ());
        if (regions == null) {
            return null;
        }
        ApplicableRegionSet set = regions.getApplicableRegions(position);

        // If we're at an intersection of multiple plots or not on a plot, abort.
        if (set.size() != 1) {
            return null;
        }

        return set.iterator().next();

    }
}
```
Now we're ready to implement our `CommandExecutor` for `/sellplot`:
```java
public class CommandListPlotForSale implements CommandExecutor {
    // Persisting this data between server reboots is left as an exercise to the developer.
    private static final HashMap<String, Double> plotsForSaleAndPrice = new HashMap<>();

    public static Double getPlotPrice(String plotId) {
        return plotsForSaleAndPrice.get(plotId);
    }

    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
        if (args.length != 1) {
            sender.sendMessage("Usage: /sellplot <amount>");
            return false;
        }

        Double amount = Double.valueOf(args[0]);
        // get the plot
        ProtectedRegion region = PlotUtility.getPlotAtLocation(((Player) sender).getLocation());
        if (region != null) {
            String plotId = region.getId();

            sender.sendMessage("You have listed " + plotId + " for sale for " + amount + " WLRD.");

            region.setFlag(Flags.GREET_MESSAGE, "&aThis plot is for sale for &6" + amount + " WRLD&f. Run /buyplot to purchase it!");
            plotsForSaleAndPrice.put(plotId, amount);

            return true;
        }
        sender.sendMessage("There is no plot at your current location to sell!");
        return false;
    }
}
```

## Buying a plot
Now that we an admin-only command for listing a plot, we need to implement the `CommandExecutor` for buying it:
```java
public class CommandBuyPlot implements CommandExecutor {
    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
        ProtectedRegion region = PlotUtility.getPlotAtLocation(((Player)sender).getLocation());
        if (region != null) {
            Double price = CommandListPlotForSale.getPlotPrice(region.getId());
            if (price == null) {
                sender.sendMessage("Error: There is no plot for sale here!");
                return false;
            }
            PlayerBuyPlotPayload payload = new PlayerBuyPlotPayload(region);
            WRLDPlots.getPayments().getNFTPlayer((Player) sender).requestWRLD(
                    price, Network.POLYGON, "Purchasing plot " + region.getId(), payload
            );
        }
        return true;
    }
}
```

## Handling the PlayerTransactEvent

Now that we've implemented the command which sends a payment request, we need to write the handler that processes the completed transaction:
```java
public class PlayerTransactEventListener implements Listener {
    @EventHandler
    public void onPlayerTransact(PlayerTransactEvent<?> e) {
        if (e.getPayload() instanceof PlayerBuyPlotPayload payload) {
            e.getPlayer().playSound(e.getPlayer().getLocation(), Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 15, 0.5F);
            e.getPlayer().sendMessage("Your transaction has been finalized, enjoy your new plot!");
            payload.plotToBuy.getOwners().clear();
            payload.plotToBuy.getOwners().addPlayer(WorldGuardPlugin.inst().wrapPlayer(e.getPlayer()));
            payload.plotToBuy.setFlag(Flags.GREET_MESSAGE, null);
        }
    }
}
```

## Setting up a test server
Once you've compiled your plugin, place it in the `plugins` folder of a Paper server alongside the [WRLD-Payments-API jarfile which you can download from GitHub](https://github.com/NFT-Worlds/WRLD-Payments-API/releases).