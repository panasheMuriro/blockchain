// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MintableToken.sol";

contract TokenInteractor {
    MintableToken public token;

    constructor(address tokenAddress) {
        token = MintableToken(tokenAddress);
    }

    function mintTokensFor(address to, uint256 value) public {
        token.mint(to, value);
    }

    function getBalance(address account) public view returns (uint256) {
        return token.balanceOf(account);
    }
}
