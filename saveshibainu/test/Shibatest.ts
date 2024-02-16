/// <reference types="ethers" />

  import { expect } from "chai";
  import { ethers } from "hardhat";

import { SaveERC20 } from "../typechain-types";
import { ShibaInu } from "../typechain-types";

describe("Save Ether contract", ()=>{
    let saveErc20: SaveERC20;
    let shibainu: ShibaInu;
    
        beforeEach(async ()=>{
          const  initialOwner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
          const ShibaInu = await ethers.getContractFactory("ShibaInu")
          shibainu = await ShibaInu.deploy()
            const SaveERC20 = await ethers.getContractFactory("SaveERC20")
            saveErc20 = await SaveERC20.deploy(shibainu.target)
        })
    
   
    describe("Deposit", ()=>{
        it.only("Should deposit Properly", async()=>{
            const depositAmount = 0
            const [owner] = await ethers.getSigners();
          const ownerbal =  await shibainu.connect(owner).balanceOf(owner.address);
          console.log(ownerbal)
          await shibainu.connect(owner).approve(saveErc20.target, depositAmount);
         await expect ( saveErc20.connect(owner).deposit(depositAmount)).to.be.revertedWith( "can't save zero value")
          const contractBal = await saveErc20.connect(owner).checkContractBalance()
          console.log(contractBal)
        })
    })
})