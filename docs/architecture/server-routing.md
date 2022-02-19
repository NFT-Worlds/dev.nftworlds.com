---
sidebar_position: 2
---

# Server Routing Configuration

When your world is ready and its server is launched, it can be enabled for multiplayer by assigning a server routing configuration JSON file hosted on IPFS through the [NFT Worlds Server Router smart contract](https://etherscan.io/address/0xe1a0F1ac54b22DE5943642E4D3C93431DC795C59).

Worlds that have a server routing configuration (or "config") file set on this smart contract will automatically show as playable in the NFT Worlds game client/launcher (unreleased) and the NFT Worlds play page on http://nftworlds.com/play

The NFT Worlds Server Router smart contract acts as the decentralized single source of truth for what worlds are enabled for multiplayer and how to connect to them. Available worlds in the game client and playable worlds webpage are determined by which worlds have valid server router configurations set on this smart contract.

You can simplify setting up your world's sever routing configuration by going to the [NFT Worlds World Manager](https://nftworlds.com/manager) and selecting "Enable Multiplayer" for your world. Doing this will guide you through a simple form to input the required and optional values for your server routing configuration.

## Schema
```json
{
  "name": "Example World",
  "description": "This file demonstrates the structure for a valid server routing configuration",
  "branding": {
      "icon": "https://pbs.twimg.com/profile_images/1440390779264929809/ZyBrRgfO_400x400.jpg",
      "banner": "https://www.nftworlds.com/static/media/worlds-lineup.8573ca68.png",
      "video": "https://www.youtube.com/watch?v=pzfsKNJa6jM&ab_channel=NFTWorlds",
      "website": "https://nftworlds.com"
  },
  "social": {
    "twitter": "https://twitter.com/nftworldsNFT",
    "discord": "https://discord.gg/nft-worlds"
  },
  "connection": {
    "address": "example.nftworlds.com",
    "port": 25565,
    "consolePort": 19132
  }
}
```

:::note

Invalid router configurations will be ignored and won't appear on the NFT Worlds game client or playable worlds page.

:::

### Field reference

All fields are required except those marked optional.

- **name** - The display name for the NFT World
- **description** - A brief description of the world and what players can expect from joining the world. The first 120 character of the description are used as a brief preview to explain your world to potential players. Descriptions can be up to 4,000 characters long.
- **branding** - Contains nested properties for world branding information
  - **icon** - An image for a jpg, png, or gif with a 1:1 aspect ratio and at least 256x256 resolution
  - **banner** - An image url for a jpg/jpeg, png or gif image. The image should be a 21:9 aspect ratio and at least 500 pixels wide.
  - **video** (optional) - A link to a Youtube video that can act as a trailer for players to learn more about your world.
  - **website** (optiona) - A website that players can visit for more information on your world.
- **social** (optional)
  - **twitter** (optional) - The URL for your world's Twitter profile.
  - **discord** (optional) - The URL for your world's Discord profile.
- **connection**
  - **address** - The server address for the world's Minecraft server. Using a domain name is recommended but IP addresses also work.
  - **port** - The server port Minecraft: Java Edition clients (Windows, macOS, Linux) should connect to. The default port is 25565.
  - **consolePort** - The server port Minecraft: Bedrock Edition clients (consoles, mobile devices) should connect to. The  default port is 19123.


