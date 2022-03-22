---
sidebar_position: 3
---

# Account API
As a blockchain developer, you have to able to fetch different information such as block info, user balance, transaction details, token prices and any other blockchain data!

You can find all of these powerful function in the **Decaid Account SDK** namespace in the Decaid SDK.

### Fetch Account Info
You can fetch account info and latest transactions by using the following method.
```js
const accountInfo = await web3.getAccountInfo('ACCOUNT_ADDRESS');
```

### Get Native Balance 🥇
You can fetch native balance by using the following method.
```js
const nativeBalance = await web3.getNativeBalance('ACCOUNT_ADDRESS');
```

### Fetch Token Balance 💸
You can fetch token balance by using the following method.
```js
const tokenBalance = await web3.getTokenBalance('ACCOUNT_ADDRESS');
```
You can also send a specific token to fetch balance.
```js
const tokenBalance = await web3.getTokenBalance('ACCOUNT_ADDRESS', 'TOKEN_ADDRESS');
```

### Get Token Transaction History 📈
You can fetch token transaction history by using the following method.
```js
const tokenTransactionHistory = await web3.getTokenTransactionHistory('ACCOUNT_ADDRESS');
```
You can also send a specific token to fetch transaction history.
```js
const tokenTransactionHistory = await web3.getTokenTransactionHistory('ACCOUNT_ADDRESS', 'TOKEN_ADDRESS');
```

### Get Owned NFTs 📦
You can fetch owned NFTs by using the following method.
```js
const ownedNFTs = await web3.getOwnedNFTs('ACCOUNT_ADDRESS');
```
You can also send a specific token to fetch owned NFTs.
```js
const ownedNFTs = await web3.getOwnedNFTs('ACCOUNT_ADDRESS', 'TOKEN_ADDRESS');
```

### Get NFT Transfers 
You can fetch NFT transfers by using the following method.
```js
const nftTransfers = await web3.getNFTTransfers('ACCOUNT_ADDRESS');
```
You can also send a specific token to fetch NFT transfers.
```js
const nftTransfers = await web3.getNFTTransfers('ACCOUNT_ADDRESS', 'CONTRACT_ADDRESS');
```
