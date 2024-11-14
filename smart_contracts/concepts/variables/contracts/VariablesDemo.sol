// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract VariablesDemo {
    uint256 public unsignedNumber = 100;
    int public signedNumber = -100;
    
    bool public isActive =  true;

    address public owner;

    string public message = "Hello, Solidity!";

    struct Person {
        string name;
        uint256 age;
    }

    // array of people

    Person[] public people;

    constructor(){
        owner  = msg.sender;
    }

    //  add the person to the array

    function addPerson(string memory name, uint256 age) public {
        // people.add(person);
        Person memory p = Person(name, age);
        people.push(p);
    }

    // update message

    function updateMessage(string memory new_message)public {
        message = new_message;
    }


    // get people

    function getPeopleCount() public view returns (uint256) {
        return people.length;
    }





}