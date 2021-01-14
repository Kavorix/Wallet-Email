import { BigNumber, ethers } from "ethers";
import { getEthersBalances } from "./eth-balance-checker";
import { fetchTokens } from "./tokens";
// TODO https://github.com/wbobeirne/eth-balance-checker

export const getETHBalance = async (
    provider: ethers.providers.Web3Provider,
): Promise<BigNumber> => {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);
    return balance;
};

export const getTokensBalances = async (
    provider: ethers.providers.Web3Provider,
) => {
    const tokens = await fetchTokens();

    const signer = provider.getSigner();
    const address = await signer.getAddress();

    const tokensWithBalances = await getEthersBalances(
        provider,
        [address],
        tokens,
    );

    return tokensWithBalances;
};
