// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract OwnableExample is Ownable {
    uint256 public data;

    // Pass the msg.sender as the initial owner in the constructor
    constructor() Ownable(msg.sender) {
        // The constructor initializes the contract with the deployer as the owner
    }

    function setData(uint256 _data) public onlyOwner {
        data = _data;
    }
}