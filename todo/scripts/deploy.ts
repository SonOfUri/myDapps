import { ethers } from "hardhat";

async function main() {
  const todoapp = await ethers.deployContract("toDoDapp")  

  await todoapp.waitForDeployment();

  console.log(
    `SetteeGetter contract deployed to ${todoapp.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x5FbDB2315678afecb367f032d93F642f64180aa3