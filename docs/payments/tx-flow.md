---
sidebar_position: 3
---

# Tutorial: Creating and processing transactions

This article will describe the lifecycle of a transaction as it's created and processed by a Spigot plugin written in Java. For an overview of how $WRLD payments work, refer to [this section](/architecture/arch#wrld-token-interaction-example).

## Creating plugin, initializing wallet

```js
public class WRLDPaymentsCommands extends JavaPlugin {
    private static WRLDPaymentsCommands plugin;
    private static WalletAPI wallet;

    public static WRLDPaymentsCommands getInstance() {
        return plugin;
    }
    public static WalletAPI getPayments() {
        return wallet;
    }

    public void onEnable() {
        plugin = this;
        wallet = new WalletAPI();

        // We create this event handler below
        getServer().getPluginManager().registerEvents(new PlayerTransactEventListener(), this);

    }
}
```

## Defining transaction types
Create a new enumerable to store your different transaction types:
```js
public enum ExampleTransactionType {
    PLAYER_BUY_APPLE_FROM_WORLD,
    PLAYER_BUY_XP_FROM_WORLD,
}
```
Note: these are the example transactions included in the [WRLD Commands Plugin](https://github.com/NFT-Worlds/wrld-payment-tester-plugin).

## Creating a payment request
```js
WRLDPaymentsCommands.getPayments().getNFTPlayer(player).requestWRLD(
    25, Network.POLYGON, ExampleTransactionType.PLAYER_BUY_APPLE_FROM_WORLD.toString()
);
```
<a href="/payments-javadoc/com/nftworlds/wallet/objects/NFTPlayer.html" target="_blank">Javadocs for this example</a>

## Writing a transaction handler

Incoming transactions are processed by a Spigot event handler like the one below:
```js
import com.nftworlds.wallet.event.PlayerTransactEvent;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.inventory.ItemStack;

public class PlayerTransactEventListener implements Listener {
    @EventHandler
    public void onPlayerTransactEvent(PlayerTransactEvent event) {
        WRLDPaymentsCommands.getInstance().getLogger().info(event.getReason() + " exe");
        try {
            ExampleTransactionType type = ExampleTransactionType.valueOf(event.getReason());
            switch (type) {
                case PLAYER_BUY_APPLE_FROM_WORLD -> playerBuyAppleFromWorld(event);
                case PLAYER_BUY_XP_FROM_WORLD -> playerBuyXPFromWorld(event);
            }
        } catch (IllegalArgumentException e) {
            WRLDPaymentsCommands.getInstance().getLogger().warning("Received transaction type not in transaction type enum.");
        }
    }

    private void playerBuyAppleFromWorld(PlayerTransactEvent event) {
        event.getPlayer().getInventory().addItem(new ItemStack(Material.APPLE));
        event.getPlayer().sendMessage(ChatColor.GOLD + "Purchase complete! Enjoy your apple!");
    }

    private void playerBuyXPFromWorld(PlayerTransactEvent event) {
        event.getPlayer().giveExp(1000);
        event.getPlayer().sendMessage(ChatColor.GOLD + "Purchase complete! You've gained some XP.");
    }
}
```

## Player Wallets & Live Payment Testing

If you want to test live payments, you need to connect your wallet that will spend $WRLD to your Minecraft account for NFT Worlds. You can do that through your NFT Worlds account page: https://nftworlds.com/login

Connecting your wallet allows the NFT Worlds ecosystem to globally recognize your player UUID and the wallet address(es) associated with it. This is how payment receipt & the target player who paid is determined.


