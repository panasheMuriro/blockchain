const hre = require("hardhat");

async function main() {
    const DataTypesAndControl = await hre.ethers.getContractFactory("DataTypesAndControl");
    const contract = await DataTypesAndControl.deploy(25); // Pass the initial age value to the constructor

    await contract.deployed();
    console.log("DataTypesAndControl deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
