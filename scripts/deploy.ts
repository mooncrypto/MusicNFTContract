import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy
  const MusicNFTFactory = await ethers.getContractFactory("MusicNFT");
  const musicNFT = await MusicNFTFactory.deploy(
    "https://my-json-server.typicode.com/mooncrypto/musicNFTmockdata/tokens/"
  );

  console.log("Contract deployed to:", musicNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
