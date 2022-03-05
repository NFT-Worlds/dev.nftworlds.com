---
sidebar_position: 1
---

# ERC721 Token API

## About
The [WRLD Payments API](/payments/wrld-payments-api) offers convenience functions for getting information about a player's NFT collection. These APIs have a variety of use-cases:
- Offer exclusive perks to players who own an item in a certain collection.
- Grant players one-of-a-kind items based on ownership of a specific item ID.
- Fetch metadata about NFTs for item stats, images, etc.

## Function Usage
### Setup
To use the WRLD API NFT convenience functions, you'll need:
1. A globally accessible variable for your custom contract address. You can put this in your main plugin class.
2. A handle on a player wallet. You'll most likely be passed this through a Spigot event handler.
```java
// In your main class:
public static final String MY_ERC721_TOKEN_CONTRACT_ADDRESS = "0x8d4100897447d173289560bc85c5c432be4f44e4";

// In your event handler (or wherever you want):
Wallet myPlayerWallet = WRLDPaymentsCommands.getPayments().getNFTPlayer((Player) sender).getPrimaryWallet()
```

### getOwnedNFTs
Lists all NFTs owned by the player. Returns a [JSONObject](https://stackoverflow.com/questions/5015844/parsing-json-object-in-java) that does NOT contain metadata.
```java
JSONObject payload = myPlayerWallet.getOwnedNFTs(Network.ETHEREUM);
// manipulate like any other JSON object...
JSONArray ownedNFTs = (JSONArray) payload.get("ownedNfts");
```
Example response:
```json
{
   "blockHash":"0xd58b5bbf7dfa93bfee5f701260be2bd8569736a99de2261dbe6cceee377a06d6",
   "ownedNfts":[
      {
         "balance":"1",
         "contract":{
            "address":"0x3d7f0f28ew3f32082e3de70ec4c9d1d59a07affb9"
         },
         "id":{
            "tokenId":"0x000000000000000000000000000000000000000000000000000000000000a5cc"
         }
      },
      {
         "balance":"1",
         "contract":{
            "address":"0x47f75228dd28df8d6e7cawf332a47026b0dca99043"
         },
         "id":{
            "tokenId":"0x00000000000000000000000000000000000000000000000000000000000003bc"
         }
      }
   ],
   "totalCount":2
}
```

### getOwnedNFTsFromContract

:::note
A "contract" is analagous with an NFT "collection"
:::

Lists all NFTs owned by the player in a certain collection. Returns a [JSONObject](https://stackoverflow.com/questions/5015844/parsing-json-object-in-java) that contains metadata.
```java
JSONObject payload = myPlayerWallet.getOwnedNFTsFromContract(Network.ETHEREUM, MY_ERC721_TOKEN_CONTRACT_ADDRESS);
```
Example response:
```json
{
   "blockHash":"0xd58b5bbf7dfa93bfee5f701260be2bd8569736a99de2261dbe6cceee377a06d6",
   "ownedNfts":[
      {
        "metadata":{
            "image":"https://ipfs.io/example",
            "name":"A Super Special Experience Pass",
            "description":"Lorem ipsum.",
            "attributes":[
               {
                  "display_type":"string",
                  "value":"VIP",
                  "trait_type":"Access Level"
               },
               {
                  "display_type":"number",
                  "value":44,
                  "trait_type":"Lucky Number"
               }
            ]
         },
         "balance":"1",
         "contract":{
            "address":"0x3d7f0f28ew3f32082e3de70ec4c9d1d59a07affb9"
         },
         "id":{
            "tokenId":"0x000000000000000000000000000000000000000000000000000000000000a5cc"
         }
      },
      {
         "balance":"1",
         "contract":{
            "address":"0x47f75228dd28df8d6e7cawf332a47026b0dca99043"
         },
         "id":{
            "tokenId":"0x00000000000000000000000000000000000000000000000000000000000003bc"
         }
      }
   ],
   "totalCount":2
}

```

### doesPlayerOwnNFTInCollection
Checks if a player owns at least one NFT in a collection. Returns a boolean.
```java
boolean shouldGrantClubAccess = myPlayerWallet.doesPlayerOwnNFTInCollection(
    Network.ETHEREUM, MY_ERC721_TOKEN_CONTRACT_ADDRESS
);
```
