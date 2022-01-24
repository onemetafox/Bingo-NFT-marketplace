const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
   ropsten: {
    provider: function() {
      return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/YOUR-PROJECT-ID");
    },
    network_id: '3',
    },
   avalan: {
    provider: function() {
      return new HDWalletProvider(mnemonic, "https://api.avax-test.network/ext/bc/C/rpc");
    },
    network_id: '43113',
  },
  },

  mocha: {
    // timeout: 100000
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./src/ABI/",

  compilers: {
    solc: {
      version: "0.8.2",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

};
