# Solidity Data Types and Variables

## Objectives
- Understand the different data types in Solidity.
- Learn to declare and initialize variables.
- Practice using variables in simple functions.

```
uint256 public unsignedNumber = 42;
int256 public signedNumber = -42;

bool public isTrue = true;

address public owner;

string public greeting = "Hello, Solidity!";

bytes32 public fixedData = "Data";

uint256[] public dynamicArray;
uint256[3] public fixedArray = [1, 2, 3];

struct Person {
    string name;
    uint256 age;
}
Person public person = Person("Alice", 30);
```


### Tests run

```
 VariablesDemo
    ✔ Should set the initial unsignedNumber to 100
    ✔ Should set the initial signedNumber to -100
    ✔ Should set the initial isActive to true
    ✔ Should set the initial message to 'Hello, Solidity!'
    ✔ Should set the owner to the deployer's address
    ✔ Should add a person to the people array
    ✔ Should update the message
    ✔ Should return the correct people count

```


