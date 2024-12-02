const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Role-Based Access Control", function () {
    let RoleBasedExample, roleBasedExample, owner, admin, user;

    beforeEach(async function () {
        [owner, admin, user] = await ethers.getSigners();
        RoleBasedExample = await ethers.getContractFactory("RoleBasedExample");
        roleBasedExample = await RoleBasedExample.deploy();
        await roleBasedExample.waitForDeployment();

        // Use the method that matches the current OpenZeppelin AccessControl implementation
        const USER_ROLE = await roleBasedExample.USER_ROLE();
        await roleBasedExample.grantRole(USER_ROLE, user.address);
    });

    it("Should allow admin to set data", async function () {
        await roleBasedExample.setData(100);
        expect(await roleBasedExample.data()).to.equal(100);
    });

    it("Should allow user to view data", async function () {
        await roleBasedExample.setData(200);
        expect(
            await roleBasedExample.connect(user).viewData()
        ).to.equal(200);
    });

    it("Should restrict non-role users from viewing data", async function () {
        // Updated to use custom error checking
        await expect(
            roleBasedExample.connect(admin).viewData()
        ).to.be.revertedWithCustomError(roleBasedExample, "AccessControlUnauthorizedAccount");
    });
});