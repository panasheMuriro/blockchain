async function main() {
    // Get the contract factory
    const VariablesDemo = await ethers.getContractFactory("VariablesDemo");
  
    // Deploy the contract
    const variablesDemo = await VariablesDemo.deploy();
  
    // Wait for the contract to be deployed
    // await variablesDemo.deployed();
    // await variablesDemo.deployTransaction.;
  
    console.log("VariablesDemo deployed to:", variablesDemo.address);
  }
  
  // Run the function and handle errors
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  