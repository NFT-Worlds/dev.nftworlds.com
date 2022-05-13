---
sidebar_position: 6
---

# Portals Between Worlds
![Server transfer mod image](/img/portal-mod.png)

The **NFT Worlds Server Transfer Mod** allows developers to transfer players to another server that's not on the same network!
This will allow players using the NFT Worlds Launcher to enjoy seamless transfers between servers in the NFT Worlds metaverse!

## How does this work?
With vanilla Minecraft, it's impossible to transfer players to a server that's not under the same network programatically. Normally players are required to manually disconnect and reconnect to their desired server. Part of the NFT Worlds vision is to be able to travel through in-game portals between sovereignly controlled worlds.

It has two components, a server-side plugin and a client-side mod which is included by default for all players using the NFT Worlds Launcher. The server plugin (implemented using the Spigot API) establishes a communication channel with the client mod (which uses the Fabric API). The following process is used to transfer players between servers:

1. Player enters portal which leads to another server/world OR developer calls function in plugin to transfer player.
2. Server sends message to player's client instructing them to connect to another server. If the player is not using the NFT Worlds Launcher this will fail silently.
3. While the player remains connected to the server, their client will attempt to connect to the destination server in the background. If successful, the player will be immediately transported to the new server.
4. If the player's client fails to connect to the server, they will receive an error message and remain connected to their current server.

## Installing the plugin
You can download the latest release of the plugin [from GitHub](https://github.com/WorldQL/server-transfer-fabric-spigot/releases/tag/v0.1.0). Be sure to download the "server-transfer-**plugin**" and not the mod. The mod is automatically included for players using the NFT Worlds Launcher.

Then, place the file in your plugins folder and you'll be ready to go.

## Adding the dependency
Add the following dependency to your project's pom.xml:
```xml
<dependencies>
...

    <dependency>
        <groupId>com.nftworlds</groupId>
        <artifactId>server-transfer-plugin</artifactId>
        <version>0.1.0</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

## Code sample: transferring a player
This code sample is taken from the [example plugin](https://github.com/WorldQL/server-transfer-fabric-spigot/tree/trunk/ExampleTransferPlugin) that implements a command for transferring players. The API accepts a string for the destination server
and a handle to the player.
```java
public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, String label, String[] args) {
    if (label.equalsIgnoreCase("connect")) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can run this command!");
            return true;
        }

        Player player = (Player) sender;
        if (args.length == 0) {
            player.sendMessage("Incorrect Usage: /connect <host>");
            return true;
        } else {
            // send transfer packet to player with host(args[0])
            ServerTransferPlugin.sendTransferPacket(args[0], player);
        }
    }

    return true;
}
```

The API for transferring players as simple as:
```java
import com.nftworlds.server_transfer.plugin.ServerTransferPlugin;
// ...inside your method
Player player = someone;
// use the static method on ServerTransferPlugin
ServerTransferPlugin.sendTransferPacket("play.example.com", player);
```

Once you call this function the communication channel managed by the ServerTransferPlugin will send the correct information to the player's client and they'll be sent to the correct destination server.