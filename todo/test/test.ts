import { expect } from "chai";
import { ethers } from "hardhat";

describe("ToDoDapp", function () {
  let toDoDapp: any; // Using 'any' for simplicity, but ideally you should have a specific type
  let accounts: any[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
    const toDoDappFactory = await ethers.getContractFactory("toDoDapp");
    toDoDapp = await toDoDappFactory.deploy();
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

  describe("addItem and items", function () {
    it("Should add a new item and retrieve it correctly", async function () {
      const title = "Test Task";
      const description = "Test Description";

      // Add an item
      await toDoDapp.addItem(title, description);

      // Retrieve the first item (assuming it has index 0)
      const item = await toDoDapp.items(0);

      // Verify that the retrieved item's properties match the input
      expect(item.title).to.equal(title);
      expect(item.description).to.equal(description);
      expect(item.status).to.be.false; // Assuming the default status is 'false' for a new item
    });
  });

  describe("deleteItem", function () {
    it("Should delete an item and reduce the array length", async function () {
      // Add two items
      await toDoDapp.addItem("Item 1", "Description 1");
      await toDoDapp.addItem("Item 2", "Description 2");

      // Delete the first item (assuming it has ID 0)
      await toDoDapp.deleteItem(0);

      // Attempt to get the item at index 0 and check the title to ensure it's now "Item 2"
      const item = await toDoDapp.items(0);
      expect(item.title).to.equal("Item 2");
    });
  });


});
