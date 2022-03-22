---
sidebar_position: 2
---

# NFT API 
Decaid's NFT API is a powerful tool that enables you to mint, deploy, and call smart contracts. Allows you to quickly get all the information you need to know about NFTs from the blockchain(i.e Ethereum, Polygon, Binance Smart Chain). Rather than searching, indexing, and storing data yourself - you can now make one request to fetch specific NFT information for both ERC-721 and ERC-1155 tokens like;

- All NFTs owned by an address
- Metadata and attributes for a specific NFT token.

## What can I make?
Using the Decaid NFT API allows you to both fetch and display NFTs for your users, making it easy to build and kinds of NFT projects. To take some inspiration from existing products, here are some examples you can explore:

- NFT Marketplace
- Build on-chain NFT Games
- Verify Ownership of Digital Assets
- Social NFT Displays
- Build a game inventory system

## Methods 
### Fetch NFT Metadata
We know all developers want to know the metadata of a NFT. Let's get the metadata of the first NFT owned by the user. We assume you have already initialize Decaid SDK!
```js title="index.js"
const NFTMetadata = await web3.getNFTMetadata('CONTRACT_ADDRESS');
```
As we said, you can get all datas in one line code! 😎

### Get NFT Owners
```js title="index.js"
const NFTOwners = await web3.getNFTOwners('CONTRACT_ADDRESS');
```

### Get NFT Token Owners
You can fetch a specific NFT token owners by using the following method.
```js title="index.js"
const NFTTokenOwners = await web3.getNFTTokenOwners('CONTRACT_ADDRESS', 'TOKEN_ID');
```

### Get All NFT Tokens
You can fetch all NFT tokens by using the following method.
```js title="index.js"
const NFTTokens = await web3.getNFTTokens('CONTRACT_ADDRESS');
```

### Get NFT Trades ♨️
You can fetch all NFT trades by using the following method.
```js title="index.js"
const NFTTrades = await web3.getNFTTrades('CONTRACT_ADDRESS');
```

### Fetch NFT Token Transfers
You can fetch all NFT token transfers by using the following method.
```js title="index.js"
const NFTTokenTransfers = await web3.getNFTTokenTransfers('CONTRACT_ADDRESS');
```

### NFT Search 🔍
You can search NFT by using the following method.
```js title="index.js"
const NFTs = await web3.searchNFTs('CONTRACT_ADDRESS', 'SEARCH_TERM');
```



