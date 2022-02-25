---
sidebar_position: 3
---

# Tutorial: Creating and processing transactions

This article will describe the lifecycle of a transaction as it's created and processed by a Spigot plugin written in Java. For an overview of how $WRLD payments work, refer to [this section](/architecture/arch#wrld-token-interaction-example).

## Creating plugin, initializing wallet

```java
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

## Defining transaction types and payloads
Transactions are defined by a payload class which is automatically associated with the transaction and sent back to the server when the player completes payment. Payload classes serve two purposes:
1. They allow the server to differentiate between multiple transaction types.
2. Developers can store any arbitrary data they want and associate it with their transaction.

```java
public class PlayerBuyItemPayload {
    public ItemStack items;

    public PlayerBuyItemPayload(ItemStack items) {
        this.items = items;
    }
}
```

## Creating a payment request
```java
PlayerBuyItemPayload payload = new PlayerBuyItemPayload(new ItemStack(Material.APPLE, 64));
double price = 15.0;
WRLDShopkeeperPlugin.getPayments().getNFTPlayer(player).requestWRLD(
        price, Network.POLYGON, "Purchasing an apple", payload
);
```
<a href="/payments-javadoc/com/nftworlds/wallet/objects/NFTPlayer.html" target="_blank">Javadocs for this example</a>

## Writing a transaction handler

Incoming transactions are processed by a Spigot event handler like the one below:
```java
public class PlayerTransactEventListener implements Listener {

    @EventHandler
    public void onPlayerTransact(PlayerTransactEvent<?> e) {
        if (e.getPayload() instanceof PlayerBuyItemPayload payload) {
            e.getPlayer().sendMessage("Transaction complete!");
            e.getPlayer().getInventory().addItem(payload.items);
        }
    }
}
```

## Player Wallets & Live Payment Testing

If you want to test live payments, you need to connect your wallet that will spend $WRLD to your Minecraft account for NFT Worlds. You can do that through your NFT Worlds account page: https://nftworlds.com/login

Connecting your wallet allows the NFT Worlds ecosystem to globally recognize your player UUID and the wallet address(es) associated with it. This is how payment receipt & the target player who paid is determined by the wrld payments api.


