// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CrowdsaleFactory = await hre.ethers.getContractFactory("Crowdsale");
  const CrowdsaleContract = await CrowdsaleFactory.deploy(1000, 0xF8d61d4bf4b1E9bd35aDbDdf8561A5226A81F316, 0x91A738deA8b317C8Ba6ABDEF013Aa69C8a78100A);

  await CrowdsaleContract.deployed();

  console.log("Crowdsale deployed to:", CrowdsaleContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
