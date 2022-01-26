require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember snake hover forget fringe turtle'; 
let testAccounts = [
"0x91ed6f38725f6aaa41ffacb1c20059dc5bd7793dbcb7b7af34d1ae8f4c1c7fbc",
"0x26e9bd20c15dc0337b9a84a7103f9c34b63bc402c4d89d28ad36afb3a14c54aa",
"0x4ac754cf33ec45f69b3c902df395eac4ede7b06323d3a867f590bf9748a75812",
"0x266e04e749c744ad0d9bc63fc2f7ac04c2edf996719d2642956cc7b64e67739d",
"0x352f80d647bce7372769a2934e66943d81d37fb2bcc93d63a9d81bc2067e0251",
"0x1f3fe3c30456a9ff3de3bdf3975ba31d5388145481371a3f66b00bf6a3023b5a",
"0x2bc972d6edffc5ffd5d8f737808507767bd6ac96860269bb3355e990a396110d",
"0xdf651380bea430e04cd3f8aa20fff671f6a0ecbdc5f04a8beecaa67effeddb39",
"0xb6c2945d796918a345d84563f968b54df2c2505307e88579c1cedc20e1feaf56",
"0x875fa26591b9fdc126a5263c788f68b79759d686c67a0f4a3402de1e0e7093ea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

