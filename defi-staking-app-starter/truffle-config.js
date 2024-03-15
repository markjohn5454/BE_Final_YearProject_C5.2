require('babel-register');
require('babel-polyfill');

module.exports = {
    networks:{
        development: {
            host: '127.0.0.1',
            port: '7545',
            network_id: '*' //connect any n/w
        },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: '../kryptonica/src/truffle_abis',
    compilers: {
        solc: {
            version: '0.8.13',
            optimizer: {
                enabled: true,
                runs: 200
            },
        }
    }
}