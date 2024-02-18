// SPDX-Lincense-Ideeentiifier: MIT

pragma solidity ^0.8.9;

contract SetterGetteer{
    // State Variables
    string myName;

    function updateName( string memory _name ) public {
        myName = _name;
    }

    function getName() public view returns ( string memory )  {
        return myName;
    }
}