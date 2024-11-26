// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BasicToken.sol";

contract MintableToken is BasicToken {
    address public owner;

    event Mint(address indexed to, uint256 value);

    constructor(uint256 _initialSupply) BasicToken(_initialSupply) {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function mint(address to, uint256 value) public onlyOwner {
        totalSupply += value;
        balances[to] += value;

        emit Mint(to, value);
    }
}
