---
sidebar_position: 1
---

# High-level Architecture

NFT Worlds is being developed to be as decentralized as possible. From player state data, to in-game currency, open-sourced codebases, world hosting and more. All layers have been thoughtfully developed to be resilient and fluidly usable across and between all worlds in the NFT Worlds ecosystem.

The following diagram displays the information flow and topography of the NFT Worlds ecosystem:
![High Level Architecture Overview diagram](/img/hla.png)

## $WRLD Token Interaction Example

A player's interaction within an NFT World to spend $WRLD token will often look something like this:

1. Player joins an NFT World's server either through our game launcher/client (unreleased) or directly by IP/address using the Minecraft client.
2. The world's server sees the player has joined the world and gets a list of wallet addresses connected to the player's Minecraft username from the "Player State & Wallet Mapping" contract. Convenience methods for this and other blockchain behavior will be provided by the NFT Worlds server codebase.
3. Player plays in the world, interacts with an item vendor to purchase a sword as an example. Interaction has a unique reference integer for the server attached to it (1234 for example) Upon player side interaction, their game-client prompts them asking to confirm sending 100 $WRLD token for the sword. Transfer occurs on Polygon & is gasless. 
4. Server sees incoming event that their wallet address received 100 $WRLD from wallet 0xABC123(...) for ref 1234. Server knows wallet maps back to the specific player because of step 2 mappings retrieved in this process. Server knows the transaction was for the sword based on the unique constant ref assigned to the transfer. Server gives item to players inventory in-game.
5. Player continues on their way, interacting in the world, buying/selling items with merchants, gaining access to special areas for $WRLD and anything else the world's creator can imagine for their in-game economy built on top of $WRLD.

The interaction layer is designed in such a way where the player side must initiate the engagement to start a transfer - servers are unable to send unsolicited requests for $WRLD to a player. This is to prevent request spamming players for payment or other malicious use cases. 

We know there are cases where world owners may want to prevent access to their world's content without the player paying a $WRLD fee. For this specific case, the world owner could have new players joining spawn in a "ticket office" type room - with an interaction element or npc that when the player interacts with them, prompts the player to pay the entry fee. Upon the server seeing the entry fee was paid, the server can teleport the player into the game content.

## In-game Item NFTs (ERC721 & ERC1155)

Depending on the purpose an NFT World is built for, the world owner may want to offer its players a way to win, earn or buy items represented as NFTs and not just as standard in-game items. This gives a way to lift item ownership out of a single world and enable cross-world collabs based on items players hold, and much more. 

For example, one world may act as a ticket purchasing hub where players can purchase tickets to other worlds that are venues for events/concerts/etc. In this case, when purchased the player would own an NFT representation of a access pass ticket in their connected wallet and be able to join events in the partnered worlds when those occur. The events/concerts/venue worlds would simply see if a player owns this ticket NFT in any of the wallets connected to a player when they join the world.

The technical interaction of this example would look something like this:

1. World owner / server uses the NFT Worlds items smart contract to create and mint 1,000 "Worlds Concerts" passes to their server's attached wallet address. Minting & item creation is done by paying $WRLD through the items contract, no gas is required.
2. Player joins ticket purchasing hub world and purchases the "Worlds Concerts" pass. They interact (player initiates intent to pay) with an in-game merchant and are requested to transfer 1,000 $WRLD to the server's attached wallet address in exchange for 1 "Worlds Concerts" pass.
3. Player confirms the transfer, server receives the blockchain event with the corresponding ref attached to purchasing a "Worlds Concert" pass.
4.  Server transfers ownership of 1 "Worlds Concert" pass to the player's wallet address that sent the 1,000 $WRLD.
5. The interaction is complete, the player may now join participating worlds/events for this "Worlds Concerts" pass.

All of these systems are implemented in such a way where they do not require any gas fees to mint or transfer. Instead, a fee just in $WRLD is required when minting items as a world owner, transferring, etc.

Lastly, the NFT Worlds Items contract will allow minted items across all NFT Worlds to be traded on OpenSea under the "NFT Worlds Items" collection (To be launched).

## Player State On Chain

One of the last requirements that we foresaw for creating cross-world functionality within the NFT Worlds ecosystem is the ability for worlds to write on-chain data specific on a per-player basis.

This means that through the blockchain api/layer within the NFT Worlds server, data formatted as a JSON blob can be written to the blockchain (via attached IPFS JSON blobs, server implementation will handle all the details) for players for the cost of a small $WRLD fee the server pays. Or, that the server can choose to pass on to a player through a player-side $WRLD payment interaction.

The use case for on-chain player state data is to allow information of player status, quest completion, accomplishments and more to be written to the blockchain as a decentralized data store layer so that other worlds can easily query this information about a player without the need for any complicated state exchange systems between worlds.

In practice, the process looks like this:

1. Player joins a world and begins playing. Player completes a challenge or boss fight of significance for example. The server writes to the blockchain a boolean flag that the player has defeated a specific boss.
2. Player leaves server, and joins another world that has partnered with the world they defeated the boss in. 
3. This new world they've joined queries player state data through the blockchain/api layer in the NFT Worlds server and recognizes the player has defeated the boss of significance in another world they partner with. 
4. Server prompts user via chatbox, or in some other way, that they've unlocked a special quest because they defeated the specific boss in another world, building on top of other world lore and yielding easter-egg like functionality for events of significant across worlds.
5. Player has an enjoyable experience on this quest and receives some special item NFT that's only acquirable through discovering this easter egg. Player engagement increases in both worlds through the positive interconnected experience.

