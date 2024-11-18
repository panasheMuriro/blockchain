// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataTypesAndControl {
    uint256 public age;
    address public owner;
    bool public isActive;
    uint256[] public numbers;

    constructor(uint256 _age) {
        age = _age;
        owner = msg.sender;
        isActive = true;
    }

    // Add a number to the array
    function addNumber(uint256 number) public {
        numbers.push(number);
    }

    // Update age only if the sender is the owner
    function updateAge(uint256 _age) public {
        require(msg.sender == owner, "Not authorized");
        age = _age;
    }

    // Calculate the sum of the numbers array
    function calculateSum() public view returns (uint256) {
        uint256 sum = 0;
        for (uint256 i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

    // Toggle the isActive state
    function toggleActive() public {
        isActive = !isActive;
    }
}
