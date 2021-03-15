import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { Signer, BigNumber as BN } from "ethers";
import { expect } from "chai";
import { MusicNFT } from "../typechain/MusicNFT";

describe("Test Token Converting", function () {
  let owner: Signer, account1: Signer, account2: Signer, account3: Signer;
  let musicNFT: MusicNFT;

  let ownerAdd, musicNFTAdd;

  const decimal: BN = BN.from(10).pow(BN.from(8));

  beforeEach(async function () {
    [owner, account1, account2, account3] = await ethers.getSigners();
    const MusicNFTFactory = await ethers.getContractFactory("MusicNFT");
    musicNFT = (await MusicNFTFactory.deploy(
      "https://my-json-server.typicode.com/gmcrypto/musicNFT/tokens/"
    )) as MusicNFT;
  });

  it("Contracts deployed successfully", async function () {
    expect(await musicNFT.name()).to.equal("MusicNFT");
  });

  it("Whitelist Enable succeed", async function () {
    expect(musicNFT.enableWhitelist(await account1.getAddress()));
  });

  it("Mint succeed", async function () {
    const add1 = await account1.getAddress();
    await musicNFT.enableWhitelist(add1);
    await musicNFT.mint(add1);
    expect(await musicNFT.ownerOf(0)).to.equal(add1);
  });
});
