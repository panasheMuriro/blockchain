const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DataTypesAndControl", function () {
    let DataTypesAndControl, contract, owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners(); // Get signers
        DataTypesAndControl = await ethers.getContractFactory("DataTypesAndControl");
        contract = await DataTypesAndControl.deploy(25); // Deploy contract with initial age
        // await contract.deployed();
    });

    it("Should initialize correctly", async function () {
        expect(await contract.age()).to.equal(25);
        expect(await contract.owner()).to.equal(owner.address);
        expect(await contract.isActive()).to.equal(true);
        expect(await contract.numbers.length).to.equal(0);  // Test length of the numbers array
    });

    it("Should add numbers to the array", async function () {
        await contract.addNumber(42);
        expect(await contract.numbers(0)).to.equal(42);  // Correctly access the first number

        await contract.addNumber(100);
        expect(await contract.numbers(1)).to.equal(100);  // Correctly access the second number
    });

    it("Should update age if called by owner", async function () {
        await contract.updateAge(30);
        expect(await contract.age()).to.equal(30);
    });

    it("Should not allow non-owner to update age", async function () {
        await expect(contract.connect(addr1).updateAge(40)).to.be.revertedWith("Not authorized");
    });

    it("Should calculate the sum of the numbers array", async function () {
        await contract.addNumber(10);
        await contract.addNumber(20);
        await contract.addNumber(30);
        expect(await contract.calculateSum()).to.equal(60);
    });

    it("Should toggle the isActive state", async function () {
        await contract.toggleActive();
        expect(await contract.isActive()).to.equal(false);

        await contract.toggleActive();
        expect(await contract.isActive()).to.equal(true);
    });
});
