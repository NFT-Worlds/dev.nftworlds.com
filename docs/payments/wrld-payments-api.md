---
sidebar_position: 1
---

# $WRLD Payments API Plugin

The [WRLD Payments API](https://github.com/NFT-Worlds/WRLD-Payments-API) provides Spigot plugins with the ability to:

- Create player payment requests from the server (such as charging for in-world experiences)
- Initiate player-to-player transfers
- Recieve information about completed transactions

## Plugin integration
This section assumes you've already [set up a Spigot plugin using IntelliJ](https://www.spigotmc.org/wiki/creating-a-blank-spigot-plugin-in-intellij-idea/).

### Download the latest release

Navigate to https://github.com/NFT-Worlds/WRLD-Payments-API/releases and download the latest `wrld-payments-api` .jar file

### Add the library to your project
Create a `libs` folder in the project's root folder (the same folder where build.gradle/pom.xml is). Then, copy the downloaded file into the folder. Afterwards, your project structure should look roughly like this:

![showing the jarfile correctly placed in resources](/img/wrld-payments-api-library.png)

### Include the library with the build

#### Maven

Open `pom.xml`. Add a new entry under `<dependencies>` like so:
```xml
<dependencies>
...

    <dependency>
        <groupId>com.nftworlds</groupId>
        <artifactId>wrld-payments-api</artifactId>
        <version>1.0</version>
        <scope>system</scope>
        <systemPath>${project.basedir}/libs/wrld-payments-api-1.0-shaded.jar</systemPath>
    </dependency>

</dependencies>
```

#### Gradle

Open `build.gradle`. Append to `dependencies` clause like so:

```groovy
dependencies {
    ...
    
    compileOnly files('libs/wrld-payments-api-1.0-shaded.jar')
}
```

Finally, refresh the buildscript in IntelliJ like so:

![refreshing gradle buildscript](/img/wrld-payments-api-refresh.png)

:::tip

You can also use [GitHub's Maven repository](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry) instead of manually including the jarfile.
However, GitHub Packages requires authentication (even for public packages) which can be extremely inconvenient.

We'll be uploading wrld-payments-api to a public repository ASAP to improve this experience.

:::

### Declare dependency in plugin.yml

To ensure that the library gets loaded properly, we need to depend on the plugin in `plugin.yml`.
Open `src/main/resources/plugin.yml` and append the following:

```yaml
...
depend: ["WRLDPaymentsAPI"]
```

The resulting `plugin.yml` should look like so:

![plugin.yml example](/img/wrld-payments-api-pluginyml.png)

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