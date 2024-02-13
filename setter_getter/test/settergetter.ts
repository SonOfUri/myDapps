import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Seetter Getter", function () {

  async function deploySetterGetter() {
   const SetterGetter = await ethers.getContractFactory("SetterGetteer");
   const setterGetterDep = await SetterGetter.deploy()

   return { setterGetterDep }
  }

  describe("Deployment", function () {
    it("Doese my contract work?", async function () {
      const { setterGetterDep } = await loadFixture(deploySetterGetter);

    await setterGetterDep.updateName("Timothy")

      expect(await setterGetterDep.getNamee()).to.equal("Timothy");
    });
  });


});
