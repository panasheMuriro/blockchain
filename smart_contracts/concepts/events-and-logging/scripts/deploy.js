async function main() {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(1000000);  // Initial supply of 1 million tokens
    
    await token.deployed();
    console.log("Token deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
