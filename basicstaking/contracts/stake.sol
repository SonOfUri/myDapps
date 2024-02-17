
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import ERC20 token implementation from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Stake is ERC20 {
    constructor(uint256 initialSupply) ERC20("Stake", "STK") {
        _mint(msg.sender, initialSupply);
    }
}