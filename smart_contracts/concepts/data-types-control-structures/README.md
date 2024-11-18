1. Data Types in Solidity
   Solidity supports a variety of data types, divided into value types and reference types.

```
Value Types
Boolean: Represents true or false.


bool isActive = true;
Integer: Supports both signed (int) and unsigned (uint) integers.


uint256 age = 25; // Unsigned integer
int256 balance = -100; // Signed integer
Address: Holds Ethereum addresses.


address public owner = msg.sender;
Enums: User-defined types with a fixed set of values.


enum Status { Active, Inactive, Pending }
Status public currentStatus = Status.Active;
Bytes: Fixed or dynamically sized sequences of bytes.


bytes32 dataHash = keccak256("Hello");
Reference Types
Arrays: Can be dynamic or fixed in size.


uint[] public numbers; // Dynamic array
uint[3] public fixedNumbers = [1, 2, 3]; // Fixed size array
Structs: Custom data structures.

struct Person {
string name;
uint256 age;
}
Person public person = Person("Alice", 30);
Mappings: Key-value storage.


mapping(address => uint256) public balances;
```



2. Control Structures
Solidity supports common control structures like if-else, loops, and require/assert/revert for error handling.

```
If-Else
if (age > 18) {
    // Do something
} else {
    // Do something else
}
Loops
For Loop

for (uint i = 0; i < 10; i++) {
    // Do something
}
While Loop

uint count = 0;
while (count < 5) {
    count++;
}
Error Handling
Require: Ensures a condition is met; otherwise, reverts.

require(msg.sender == owner, "Only the owner can call this function");
Assert: Checks invariants. Should only be used for internal errors.

assert(balance > 0);
Revert: Explicitly triggers an error with a message.


if (balance == 0) {
    revert("Balance is zero");
}
```

## Test results
```
  DataTypesAndControl
    ✔ Should initialize correctly
    ✔ Should add numbers to the array
    ✔ Should update age if called by owner
    ✔ Should not allow non-owner to update age
    ✔ Should calculate the sum of the numbers array
    ✔ Should toggle the isActive state
```