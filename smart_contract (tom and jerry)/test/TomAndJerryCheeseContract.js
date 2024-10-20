const { expect } = require("chai");

describe("TomAndJerryCheeseContract", function () {
  let tomAndJerryContract;
  let owner;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    const TomAndJerryCheeseContract = await ethers.getContractFactory("TomAndJerryCheeseContract");
    
    // Deploy the contract
    tomAndJerryContract = await TomAndJerryCheeseContract.deploy();
    
    // Get the owner of the contract (the one deploying it)
    [owner] = await ethers.getSigners();
  });

  it("should allow Jerry to get the cheese if Tom does not trick him", async function () {
    // Set the trap to false (no trick)
    await tomAndJerryContract.setTrap(false);
    
    // Jerry tries to get the cheese
    await expect(tomAndJerryContract.getCheese()).to.emit(tomAndJerryContract, "CheeseEaten").withArgs(owner.address, "Jerry got the cheese safely! Yum!");
  });

  it("should notify that Tom tried to trick Jerry", async function () {
    // Set the trap to true (Tom tricks Jerry)
    await tomAndJerryContract.setTrap(true);
    
    // Jerry tries to get the cheese
    await expect(tomAndJerryContract.getCheese()).to.emit(tomAndJerryContract, "TomTrickedJerry").withArgs("Oh no! Tom tried to trap Jerry!");
  });

  it("should reset the trap", async function () {
    // Set the trap to true, tricking Jerry
    await tomAndJerryContract.setTrap(true);
    
    // Reset the trap
    await tomAndJerryContract.resetTrap();
    
    // Check the trap is reset
    expect(await tomAndJerryContract.tomTricked()).to.equal(false);
  });
});
