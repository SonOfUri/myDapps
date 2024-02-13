import { expect } from "chai";
import { ethers } from "hardhat";

describe("ToDoDapp", function () {
  let toDoDapp: any; // Using 'any' for simplicity, but ideally you should have a specific type
  let accounts: any[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
    const toDoDappFactory = await ethers.getContractFactory("toDoDapp");
    toDoDapp = await toDoDappFactory.deploy();
    // await toDoDapp.deployed();
  });

  describe("toggleItemStatus", function () {
    it("Should toggle the status of an item", async function () {
      // Step 1: Add an item
      await toDoDapp.addItem("Test Title", "Test Description");

      // Step 2: Toggle the status of the first item (assuming its ID is 0)
      await toDoDapp.toggleItemStatus(0);

      // Step 3: Retrieve the item and verify the status has been toggled
      const item = await toDoDapp.items(0);
      expect(item.status).to.be.true; // Assuming the default status was false, it should now be true

      // Optional: Toggle back and check again
      await toDoDapp.toggleItemStatus(0);
      const toggledBackItem = await toDoDapp.items(0);
      expect(toggledBackItem.status).to.be.false; // The status should be back to false
    });
  });

  // Your tests go here...
});
