// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract ToDoDapp {

    struct ItemObject {
        string title;
        string description;
        uint8 itemId;
        bool status; // true for completed, false for incomplete
    }

    ItemObject[] public items;
    uint8 public nextItemId;

    function addItem(string memory _title, string memory _description) public {
    ItemObject memory newItem = ItemObject({
        title: _title,
        description: _description,
        itemId: nextItemId,
        status: false // Default status is 'undone'
    });
    nextItemId++;
    items.push(newItem); // Add the new item to the 'items' array
    }

    function toggleItemStatus(uint _itemId) public {
        for (uint i = 0; i < items.length; i++) {
            if (items[i].itemId == _itemId) {
                items[i].status = !items[i].status; // Toggle the status
                break; // Exit the loop once the item's status is toggled
            }
        }
    }

    function viewItems() public view returns (uint[] memory, string[] memory, string[] memory, bool[] memory) {
        uint[] memory ids = new uint[](items.length);
        string[] memory titles = new string[](items.length);
        string[] memory descriptions = new string[](items.length);
        bool[] memory statuses = new bool[](items.length);

        for (uint i = 0; i < items.length; i++) {
            ItemObject storage item = items[i];
            ids[i] = item.itemId;
            titles[i] = item.title;
            descriptions[i] = item.description;
            statuses[i] = item.status;
        }

        return (ids, titles, descriptions, statuses);
    }

    function deleteItem(uint _itemId) public {
        for (uint i = 0; i < items.length; i++) {
            if (items[i].itemId == _itemId) {
                items[i] = items[items.length - 1]; // Move the last element to the deleted spot
                items.pop(); // Remove the last element
                break; // Exit the loop once the item is deleted
            }
        }
    }

    function clearList() public {
        delete items;
        nextItemId = 0;
    }

}