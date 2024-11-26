async function main() {
    const MintableToken = await ethers.getContractFactory("MintableToken");
    const mintableToken = await MintableToken.deploy(1000); // Deploy with initial supply
    console.log("MintableToken deployed to:", mintableToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
