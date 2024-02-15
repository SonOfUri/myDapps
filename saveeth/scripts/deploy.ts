import { ethers } from 'hardhat';

async function main() {
  const saveEth = await ethers.deployContract("SaveEther");
  await saveEth.waitForDeployment();

  console.log(
    `SaveEther contract deployed to ${saveEth.target}`
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

  //0x5FbDB2315678afecb367f032d93F642f64180aa3