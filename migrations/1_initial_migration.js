var Migrations = artifacts.require("./Migrations.sol");
var Whitecoin = artifacts.require("./WhiteCoin");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Whitecoin);
};
