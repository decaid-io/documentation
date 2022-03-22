---
sidebar_position: 1
---

# Say hi to Web3 Era!
Quick start quide to Decaid! Learn how to create an Decaid key, make your first request, setup up Decaid as your client, and get to building!

**New to Decaid?**

_Calm down, it's easy!_
You can create an Decaid key by clicking [here](https://decaid.io).



## Steps to get started with Decaid
This guide assumes you already have an Decaid key and access to the Decaid API.

**1.** 🔐 Create a Free API Key

**2.** 🤘 Make a request

**3.** 🤝 Setup up Decaid as your client

**4.** 🕹️ Build your first Web3 application!

## 1. Create a Free API Key

It's very easy to create an Decaid key. Just click [here](https://decaid.io) and create an account.

## 2. Make a request
You can interact with Decaid's infrastructure providers through the Decaid API.
For manuel requests, we recommend interacting with the `RESTFUL` API.

```shell
curl --request GET \
 --url 'https://api.decaid.io/nft/0xb4d06d46a8285f4ec79fd294f78a881799d8ced9/owners?chain=eth' \
 --header 'X-DECAID-API-KEY: YOUR-API-KEY-HERE'
```

## 3. Setup up Decaid as your client
Below you will find how to set up or switch your current provider to Web3.js, Web3.py, Web3j, and Ether.js.

### Decaid Web3 API
There are tons of Web3 libraries you can integrate with Decaid, however, Decaid's Web3 API is the most stable and reliable.

To install Decaid Web3 API, you want to create a project, and then navigate to your project directory to run the installation. Let's go ahead and do that! Once we're in our home directory, let's execute the following:

With yarn;
```shell
mkdir my-cool-project
cd my-cool-project
yarn add @decaid/web3
```

With npm;
```shell
mkdir my-cool-project
cd my-cool-project
npm install @decaid/web3
```

:::danger Take care
You might get warnings/errors, but no need to worry about them — they're harmless!
:::

## Talk is cheap, show me the code! ❤️‍🔥

Decaid's Web3 API has easy to use endpoints that allow you to fetch and display NFTs for your users. In addition you can use our JS SDK to interact with the Decaid API's!

Let's get the user's NFTs!

```js title="index.js"
import { createDecaidEra } from '@decaid/web3'

const web3 = createDecaidEra({
  api_key: '<your-api-key>',
  chain: '<chain>', // you can write 'eth', 'rinkeby', 'matic', 'mumbai', 'bsc', 'bsc-test'
  wallet_address: '<user-wallet-address>' // it's not required for NFT API
})

const NFTs = await web3.getNFTs()
```

It was easy! Right?

## Pagination and Limitation

All Decaid functions has a pagination feature. You can send pagination options **in the last parameter.** For instance, you can fetch all NFTs owned by an address by using the following method.

```js title="index.js"
const paginationOptions = {
  offset: 14,
  limit: 120
}

const NFTs = await web3.getNFTs('CONTRACT_ADDRESS', paginationOptions)
```

