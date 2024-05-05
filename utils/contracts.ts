import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x94cc5A4A392C72FD2Bd1EEaF0A220ac74F2D0A06";
const rewardTokenContractAddress = "0xf642f88D6a0Bf75E252D532D58c857aFc3A14432";
const stakingContractAddress = "0x52AeE68f76831145fda5ebf64DfA54326C796E4C";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});
