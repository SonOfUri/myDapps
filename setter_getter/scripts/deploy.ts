import { ethers } from "hardhat";

async function main() {
  const setterGetter = await ethers.deployContract("SetterGetteer")  

  await setterGetter.waitForDeployment();

  console.log(
    `SetteeGetter contract deployed to ${setterGetter.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
