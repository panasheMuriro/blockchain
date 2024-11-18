// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint256 public totalSupply;
    
    // Mapping to keep track of balances
    mapping(address => uint256) public balances;

    // Declaring an event for transferring tokens
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply;
        balances[msg.sender] = _initialSupply;
    }

    // Function to transfer tokens
    function transfer(address to, uint256 value) public returns (bool) {
        require(balances[msg.sender] >= value, "Insufficient balance");
        
        balances[msg.sender] -= value;
        balances[to] += value;
        
        // Emit a Transfer event when tokens are sent
        emit Transfer(msg.sender, to, value);
        return true;
    }
}
