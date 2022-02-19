---
sidebar_position: 1
---

# $WRLD Payments API Plugin

The [WRLD Payments API](https://github.com/NFT-Worlds/WRLD-Payments-API) provides Spigot plugins with the ability to:

- Create player payment requests from the server (such as charging for in-world experiences)
- Initiate player-to-player transfers
- Recieve information about completed transactions

## Adding the library to an IntelliJ IDEA project
This section assumes you've already [set up a Spigot plugin using IntelliJ](https://www.spigotmc.org/wiki/creating-a-blank-spigot-plugin-in-intellij-idea/).

### Download the latest release

Navigate to https://github.com/NFT-Worlds/WRLD-Payments-API/releases and download the latest `wrld-payments-api` .jar file

### Add the jar to your project's resources folder:
Drag the downloaded file into the "resources" folder in your Spigot plugin (the same folder where plugin.yml is). Afterwards, your project structure should look like this:

![showing the jarfile correctly placed in resources](/img/intellij-resources.png)

### Add jar to Maven
Open `pom.xml`. Add a new entry under `<dependencies>` like so:
```xml
<dependencies>
...

    <dependency>
        <groupId>com.nftworlds</groupId>
        <artifactId>wrld-payments-api</artifactId>
        <version>1.0</version>
        <scope>system</scope>
        <systemPath>${project.basedir}/src/main/resources/wrld-payments-api-1.0-shaded.jar</systemPath>
    </dependency>

</dependencies>
```

## Reference

Click on any header to go to the Javadocs for that class. 

### [WalletAPI](/payments-javadoc/com/nftworlds/wallet/api/WalletAPI.html)
This is the main class you should use when writing a plugin. Create an instance of it and reuse it across your plugin.

### [NFTPlayer](/payments-javadoc/com/nftworlds/wallet/objects/NFTPlayer.html)
The class used throughout the WRLD Payments API to represent a player and their attached wallets.

### [PlayerTransactEvent](/payments-javadoc/com/nftworlds/wallet/event/PlayerTransactEvent.html)
Listen for this event to detect completed player-to-server transactions.

### [PeerToPeerPayEvent](/payments-javadoc/com/nftworlds/wallet/event/PeerToPeerPayEvent.html)
Listen for this event to detect completed peer-to-peer transactions.

These are just the most important classes, **please explore the [auto-generated Javadocs](/payments-javadoc/index.html) for complete reference documentation**.