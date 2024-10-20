// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TomAndJerryCheeseContract {
    bool public tomTricked;
    event CheeseEaten(address indexed jerry, string message);
    event TomTrickedJerry(string message);

    function setTrap(bool trick) public {
        tomTricked = trick;
    }

    function getCheese() public {
        if (tomTricked) {
            emit TomTrickedJerry("Oh no! Tom tried to trap Jerry!");
        } else {
            emit CheeseEaten(msg.sender, "Jerry got the cheese safely! Yum!");
        }
    }

    function resetTrap() public {
        tomTricked = false;
    }
}
