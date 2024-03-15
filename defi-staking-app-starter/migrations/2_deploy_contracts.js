const OCertificate = artifacts.require("OCertificate");
const IPFSStorage = artifacts.require("IPFSStorage");
module.exports = function (deployer) {
    deployer.deploy(OCertificate)
    deployer.deploy(IPFSStorage)
};