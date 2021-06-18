async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("StakingRewards");
    const token = await Token.deploy(
      deployer.address,
      deployer.address,
      "0x469c967F48B0F2042057F7E59f27c8c829cEfd0b",
      "0xa8Df643E703a7B664Ba35434f1a8B9098383071A",
      86400
    );
  
    console.log("Token address:", token.address);
}
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});