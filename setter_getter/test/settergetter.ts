import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Contract cases", function () {
  
  async function deployContractsInstances() {

    const settergetterContract = await ethers.getContractFactory("SetterGetteer");
    const setterGetterDeployment = await settergetterContract.deploy();

    return { setterGetterDeployment };
  }

  describe("Contracts Deployments", function () {
    it("Should pass if Setter Getter contract has deployed succesffully", async function () {
      const { setterGetterDeployment } = await loadFixture(deployContractsInstances);
      expect(setterGetterDeployment).to.exist;
    });
  });

  
  describe("Test Functions", function () {
    it("Should Pass If updateName and getName Works function works", async function () {
      const settergetterContract = await ethers.getContractFactory("SetterGetteer");
      const setterGetterDeployment = await settergetterContract.deploy();

      const testName = "Alice";
      await setterGetterDeployment.updateName(testName);
      const nameReturned = await setterGetterDeployment.getName();

      expect(testName).to.equal(nameReturned);
    });
  });

  describe("Test Functions", function () {
    it("Should Pass If updateName and getName Works function works", async function () {
      const settergetterContract = await ethers.getContractFactory("SetterGetteer");
      const setterGetterDeployment = await settergetterContract.deploy();

      const testName = "Alex";
      await setterGetterDeployment.updateName(testName);
      const nameReturned = await setterGetterDeployment.getName();

      expect(nameReturned).to.equal("Alex");
    });
  });

})