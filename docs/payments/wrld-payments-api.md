---
sidebar_position: 1
---

# $WRLD Payments API Plugin

The [WRLD Payments API](https://github.com/NFT-Worlds/WRLD-Payments-API) provides Spigot plugins with the ability to:

- Create player payment requests from the server (such as charging for in-world experiences)
- Initiate player-to-player transfers
- Recieve information about completed transactions

## Plugin integration
This section assumes you've already [set up a Spigot plugin using IntelliJ and Maven](https://www.spigotmc.org/wiki/creating-a-plugin-with-maven-using-intellij-idea/).

**Important: you must replace the Spigot API in your `pom.xml` with the Paper API**. If you have an `org.spigotmc:spigot-api` dependency, replace it with this:
```xml
<dependency>
    <groupId>io.papermc.paper</groupId>
    <artifactId>paper-api</artifactId>
    <version>1.17.1-R0.1-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

### Include the library with the build

#### Maven

Open `pom.xml`. Add new entries under `<repositories>` and `<dependencies>` like so:
```xml
<repositories>
...

    <repository>
        <id>worldql-partners</id>
        <url>https://maven.worldql.com/releases</url>
    </repository>
</repositories>

<dependencies>
...

    <dependency>
        <groupId>com.nftworlds</groupId>
        <artifactId>wrld-payments-api</artifactId>
        <version>0.1.6</version>
    </dependency>

</dependencies>
```

#### Gradle

Open `build.gradle`. Append to `repositories` and `dependencies` clauses like so:

```groovy
repositories: {
    maven {
        url "https://maven.worldql.com/release"
    }
}
dependencies {
    ...
    
    compileOnly 'com.nftworlds:wrld-payments-api:0.1.6'
}
```

### Declare dependency in plugin.yml

To ensure that the library gets loaded properly, we need to depend on the plugin in `plugin.yml`.
Open `src/main/resources/plugin.yml` and append the following:

```yaml
...
depend: ["WRLDPaymentsAPI"]
```

The resulting `plugin.yml` should look like so:

![plugin.yml example](/img/wrld-payments-api-pluginyml.png)

## Paying players with server-to-player transactions
If you want to reward players for achieving victory in your world, you can use the `Wallet.payPlayer` method.

First, you'll need to configure your `config.yml` with a `server_wallet_private_key`:
```yml
server_wallet_private_key: "0xYourPrivateKey"
```

You will see a warning in your server logs:
```
[14:27:04 WARN]: A private key has been set in the plugin config! Only install plugins you trust. 
```

Now, you can use the Java API to send payments to players:
```java
Player payee = Bukkit.getPlayer(someUUID);
double amount = Double.parseDouble("0.25");
String reason = "Congrats on completing the parkour challenge!";

WRLDPaymentsCommands.getPayments().getNFTPlayer(payee)
    .getPrimaryWallet().payWRLD(amount, Network.POLYGON, reason);
```

The player will be immediately notified they have an incoming pending transactions. Within a minute, the player will be notified of the successful incoming payment alongside a clickable link to a block explorer. 
![Successful payment chat message](/img/successfulpayment.png)

## Configuring Ethereum and Polygon RPC endpoints
In order to use the WRLD Payments API, you must obtain HTTPS RPC endpoints for both Ethereum and Polygon. If you don't host your own node, we recommend [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/). These endpoints can be set using `polygon_https_rpc` and `ethereum_https_rpc` in `plugins/WRLDPaymentsAPI/config.yml`. A correct configuration looks like this:
```yml
polygon_https_rpc: https://polygon-mainnet.g.alchemy.com/v2/YourAPIKeyHere
ethereum_https_rpc: https://eth-mainnet.alchemyapi.io/v2/YourAPIKeyHere
```

## Getting balances for custom ERC20 tokens
If you want to get a user's balance for an ERC20 token that isn't WRLD, we have an API method to make that easy:
```java
Wallet playerWallet = WRLDPaymentsCommands.getPayments().getNFTPlayer(examplePlayer);
// This is a blocking call and will fetch and update player balances before moving to the next line
// Be sure not to run this lookup in the main thread
wallet.refreshERC20Balance(Network.POLYGON, "0xYourTokenContractAddress");
// Now, you can access the player's balance through a hashmap member of the wallet
double playerBalance = wallet.getCustomPolygonBalances().get("0xYourTokenContractAddress");
```


To get the underlying web3j wrapper for direct access to the smart contract, use the following:
```java
ERC20 myCustomToken = wallet.getCustomEthereumTokenWrappers().get("0xYourTokenContractAddress");
// access any of the standard web3j ERC20 contract features
myCustomToken.transfer("0xSomeone", new BigInteger("10000"));
```
:::info
Currently, these API methods load custom ERC20 contracts using the server's default private key (the same one used for WRLD). When calling the `transfer` function on the underlying contract, be aware that you are not transferring player funds but server funds.

This API will be updated to allow sending arbitrary ERC20 tokens with a convenience method that abstracts the contract wrapper. If you'd like this feature expedited, let us know! If you need more flexibility, we recommend using [the web3j ERC20 wrapper directly](https://docs.web3j.io/4.8.7/smart_contracts/contracts_supported_by_web3j/#eip20).
:::

## Reference

Click on any header to go to the Javadocs for that class. 

### <a href="/payments-javadoc/com/nftworlds/wallet/api/WalletAPI.html" target="_blank">WalletAPI</a>
This is the main class you should use when writing a plugin. Create an instance of it and reuse it across your plugin.

### <a target="_blank" href="/payments-javadoc/com/nftworlds/wallet/objects/NFTPlayer.html">NFTPlayer</a>
The class used throughout the WRLD Payments API to represent a player and their attached wallets.

### <a target="_blank" href="/payments-javadoc/com/nftworlds/wallet/event/PlayerTransactEvent.html">PlayerTransactEvent</a>
Listen for this event to detect completed player-to-server transactions.

### <a href="/payments-javadoc/com/nftworlds/wallet/event/PeerToPeerPayEvent.html" target="_blank">PeerToPeerPayEvent</a>
Listen for this event to detect completed peer-to-peer transactions.

These are just the most important classes, **please explore the <a target="_blank" href="/payments-javadoc/index.html">auto-generated Javadocs</a> for complete reference documentation**.
