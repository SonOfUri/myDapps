import { ethers } from "hardhat";

async function main() {
    // Get the ContractFactory and Signers here.
    const toDoDapp = await ethers.getContractFactory("toDoDapp");
    const toDoDappDeployed = await toDoDapp.deploy();

    await toDoDappDeployed.deployed();

    console.log("toDoDapp deployed to:", toDoDappDeployed.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
