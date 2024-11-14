const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VariablesDemo", function () {
  let VariablesDemo, variablesDemo, owner;

  before(async function () {
    // Get the ContractFactory and Signers
    VariablesDemo = await ethers.getContractFactory("VariablesDemo");
    [owner] = await ethers.getSigners();

    // Deploy the contract
    variablesDemo = await VariablesDemo.deploy();
    // await variablesDemo.deployed();

  });

  it("Should set the initial unsignedNumber to 100", async function () {
    expect(await variablesDemo.unsignedNumber()).to.equal(100);
  });

  it("Should set the initial signedNumber to -100", async function () {
    expect(await variablesDemo.signedNumber()).to.equal(-100);
  });

  it("Should set the initial isActive to true", async function () {
    expect(await variablesDemo.isActive()).to.equal(true);
  });

  it("Should set the initial message to 'Hello, Solidity!'", async function () {
    expect(await variablesDemo.message()).to.equal("Hello, Solidity!");
  });

  it("Should set the owner to the deployer's address", async function () {
    expect(await variablesDemo.owner()).to.equal(owner.address);
  });

  it("Should add a person to the people array", async function () {
    await variablesDemo.addPerson("Alice", 30);
    const person = await variablesDemo.people(0);
    expect(person.name).to.equal("Alice");
    expect(person.age).to.equal(30);
  });

  it("Should update the message", async function () {
    const newMessage = "New Message!";
    await variablesDemo.updateMessage(newMessage);
    expect(await variablesDemo.message()).to.equal(newMessage);
  });

  it("Should return the correct people count", async function () {
    expect(await variablesDemo.getPeopleCount()).to.equal(1); // Already added "Alice" in previous test
  });
});
