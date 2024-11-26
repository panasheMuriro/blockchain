const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Inheritance and Interaction", function () {
    let BasicToken, MintableToken, TokenInteractor;
    let mintableToken, tokenInteractor;
    let owner, addr1, addr2;

    beforeEach(async function () {
        // Retrieve accounts
        [owner, addr1, addr2] = await ethers.getSigners();

        // Get contract factories
        BasicToken = await ethers.getContractFactory("BasicToken");
        MintableToken = await ethers.getContractFactory("MintableToken");
        TokenInteractor = await ethers.getContractFactory("TokenInteractor");

        // Deploy contracts
        mintableToken = await MintableToken.deploy(1000); // Deploy with initial supply of 1000
        console.log("MintableToken Address:", mintableToken.address); 
        tokenInteractor = await TokenInteractor.deploy(mintableToken.address); // Deploy with the MintableToken address
    });

    

    it("Should allow minting through the derived contract", async function () {
        await mintableToken.mint(addr1.address, 500); // Mint 500 tokens to addr1
        expect(await mintableToken.totalSupply()).to.equal(1500); // Total supply increases by 500
        expect(await mintableToken.balanceOf(addr1.address)).to.equal(500); // addr1 has 500 tokens
    });

    it("Should allow minting through the interacting contract", async function () {
        await tokenInteractor.mintTokensFor(addr2.address, 300); // Mint 300 tokens via the interactor
        expect(await mintableToken.totalSupply()).to.equal(1300); // Total supply increases by 300
        expect(await mintableToken.balanceOf(addr2.address)).to.equal(300); // addr2 has 300 tokens
    });

    it("Should restrict minting to the owner", async function () {
        await expect(
            mintableToken.connect(addr1).mint(addr1.address, 200) // Non-owner tries to mint
        ).to.be.revertedWith("Only the owner can perform this action"); // Should revert
    });
});
