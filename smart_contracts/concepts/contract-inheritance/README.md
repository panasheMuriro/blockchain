# Inheritance and Smart Contract Interaction

In this lesson, we’ll explore how Solidity supports inheritance, a key feature in object-oriented programming. This enables one contract to derive properties and functionality from another. Additionally, we’ll cover how smart contracts interact with one another.

## Key Concepts of Inheritance
1. Base Contract: A contract that provides common functionality to other contracts.
2. Derived Contract: A contract that inherits from a base contract and can extend or override its functionality.
3. Modifiers: You can use the virtual and override keywords to allow/override inherited functions.
4. Visibility: Functions and variables can be marked as public, internal, private, or external to control access.


## Key Takeaways
- Inheritance: Use inheritance to share common functionality between contracts, avoiding code duplication.
- Modifiers: Use modifiers like onlyOwner to enforce access control.
- Inter-Contract Communication: Contracts can interact with one another using their ABI and address.
