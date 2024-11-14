// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message;

    // Constructor to initialize the message
    constructor(string memory _message) {
        message = _message;
    }

    // Function to update the message
    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}