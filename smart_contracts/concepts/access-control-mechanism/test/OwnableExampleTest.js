const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ownable Contract", function () {
    let OwnableExample, ownableExample, owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        OwnableExample = await ethers.getContractFactory("OwnableExample");
        ownableExample = await OwnableExample.deploy();
        // Use .waitForDeployment() method
        await ownableExample.waitForDeployment();
    });

    it("Should allow the owner to set data", async function () {
        await ownableExample.setData(42);
        expect(await ownableExample.data()).to.equal(42);
    });

    it("Should restrict non-owners from setting data", async function () {
        await expect(
            ownableExample.connect(addr1).setData(42)
        ).to.be.revertedWithCustomError(ownableExample, "OwnableUnauthorizedAccount");
    });
});