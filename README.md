# Ethereum Wallet with your Email

Tech:
Typescript
NextJS

## Quickstart

Clone this

Instal dependencies
`yarn`

Set up .env file with
`NEXT_PUBLIC_MAGIC_KEY #Magic key`

Run
`yarn dev`

## Deploy to Vercel

Just associate the repo to vercel and add your `NEXT_PUBLIC_MAGIC_KEY`


## Architecture

Ethers for interacting with Ethereum

Magic Link for Login + Signer

There's a few components that deal with the presentation layer + data

User balance, for Eth and ERC20 tokens is fetched through hooks, see /hooks