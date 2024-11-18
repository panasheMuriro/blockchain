# Events and Logging in Solidity

1. What are Events in Solidity?
- An event in Solidity is a way to log important contract interactions. 
- When an event is emitted in the contract, it is stored on the blockchain and can be listened to by external consumers such as front-end applications.

Events are cheaper than storing data on the blockchain, and you can use them for things like:

State changes (e.g., when a value is updated).
User interactions (e.g., sending tokens or making purchases).


## Testing Results

```
  Token Contract
    ✔ Should deploy with the correct total supply
    ✔ Should emit Transfer event when tokens are transferred
    ✔ Should transfer tokens correctly
    ✔ Should not allow transfer with insufficient balance
    ✔ Should listen to Transfer events
    
```