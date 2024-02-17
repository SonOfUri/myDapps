const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  time,
  loadFixture,
} = require ("@nomicfoundation/hardhat-toolbox/network-helpers");


describe("Piggy", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySavingsCOntract() {
   

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const myToken = await ethers.getContractFactory("ShibaInu");
    const token = await myToken.deploy();


    const piggy = await ethers.getContractFactory("Piggy");
    const savingsContract = await piggy.deploy(token.target);

    return { token, savingsContract, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Has the token deployed?", async function () {
      const { token } = await loadFixture(deploySavingsCOntract);

      expect(token).to.exist;
    });

    it("Has Piggy Deployed?", async  ()=>{
      const {savingsContract} = await loadFixture(deploySavingsCOntract);
      
      expect(savingsContract).to.exist;
    })

    // it("Should set the right owner", async function () {
    //   const { lock, owner } = await loadFixture(deployOneYearLockFixture);

    //   expect(await lock.owner()).to.equal(owner.address);
    // });

    // it("Should receive and store the funds to lock", async function () {
    //   const { lock, lockedAmount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );

    //   expect(await ethers.provider.getBalance(lock.target)).to.equal(
    //     lockedAmount
    //   );
    // });

    // it("Should fail if the unlockTime is not in the future", async function () {
    //   // We don't use the fixture here because we want a different deployment
    //   const latestTime = await time.latest();
    //   const Lock = await ethers.getContractFactory("Lock");
    //   await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
    //     "Unlock time should be in the future"
    //   );
    // });
  });

  describe("Deposit", function () {
    it("Can Ether be deposited?", async function (){
      const {savingsContract, owner} = await loadFixture(deploySavingsCOntract);
      await savingsContract.depositEthers({value: 3})

      const bal = await savingsContract.checkSavings(owner, 0)

      expect(bal).to.be.equal(3)

    })
  })

  it("Can ShibaInu be deposited?", async function (){
    const {token, savingsContract} = await loadFixture(deploySavingsCOntract);
      await token.approve(savingsContract.target, 200)

      const tx = await savingsContract.depositToken(100)

      expect(tx).emit

  })

  it("Can ShibaInu be deposited & Balance?", async function (){
    const {token, savingsContract, owner} = await loadFixture(deploySavingsCOntract);
      await token.approve(savingsContract.target, 200)

      const tx = await savingsContract.depositToken(100)

      const bal = await savingsContract.checkContractBal(owner, 1)

      expect(bal).to.be.reverthWith();

  })
})



