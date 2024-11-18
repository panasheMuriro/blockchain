const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", function () {
    let Token, token, owner, addr1, addr2;

    beforeEach(async function () {
        // Get signers and deploy contract before each test
        [owner, addr1, addr2] = await ethers.getSigners();
        Token = await ethers.getContractFactory("Token");
        token = await Token.deploy(1000000);  // Initial supply of 1 million tokens
        // await token.deployed();
    });

    it("Should deploy with the correct total supply", async function () {
        expect(await token.totalSupply()).to.equal(1000000);
        expect(await token.balances(owner.address)).to.equal(1000000); // Owner should have all tokens
    });

    it("Should emit Transfer event when tokens are transferred", async function () {
        // Transfer tokens from owner to addr1
        await expect(token.transfer(addr1.address, 1000))
            .to.emit(token, "Transfer")  // Expect the Transfer event to be emitted
            .withArgs(owner.address, addr1.address, 1000); // Check if the correct parameters were emitted
    });

    it("Should transfer tokens correctly", async function () {
        // Transfer tokens from owner to addr1
        await token.transfer(addr1.address, 1000);

        // Verify balances after transfer
        expect(await token.balances(owner.address)).to.equal(999000);
        expect(await token.balances(addr1.address)).to.equal(1000);
    });

    it("Should not allow transfer with insufficient balance", async function () {
        // Try transferring more tokens than available
        await expect(token.transfer(addr1.address, 9999999)).to.be.revertedWith("Insufficient balance");
    });

    it("Should listen to Transfer events", async function () {
        // Set up an event listener to listen to Transfer events
        token.on("Transfer", (from, to, value) => {
            console.log(`Transfer event: from ${from} to ${to} of value ${value}`);
        });

        // Transfer tokens from owner to addr2
        await token.transfer(addr2.address, 500);

        // Check the transfer details in the log output of the event listener
        expect(await token.balances(owner.address)).to.equal(999500);
        expect(await token.balances(addr2.address)).to.equal(500);
    });
});
