import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";
import "hardhat-typechain";
import "@nomiclabs/hardhat-ethers";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  // Your type-safe config goes here
  solidity: {
    compilers: [
      {
        version: "0.7.0",
        settings: {},
      },
    ],
  },
  networks: {
    rinkeby: {
      url:
        "https://eth-kovan.alchemyapi.io/v2/qaFi-8mJMAo1aZMCWJQeimgPsWAu5Tl0",
      accounts: [process.env.RINKEBY_PK],
    },
  },
};
export default config;
