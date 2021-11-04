require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stool curtain place history hope clinic metal genius'; 
let testAccounts = [
"0xf1daf395e0c2915eeebcd87853501e1cbd67063486e3e8baca649ecd4b68383c",
"0xbc8d62a88464da554e633d6a9a9a608f807f48600115c6c34e176764ca5aa387",
"0x07570b06c2378e5feafcde003355c67b8e8dc2a9bad777e33ab3ea55c473fb57",
"0x8956b3f83a6e7140fa9d3294941d47feeecd961e4ce8c2f7307688646d6782b0",
"0x9c3a4edd0d64eb37475d8ce02f8a614693a363ca75a0b5e8ce04543a75f58aa7",
"0x5ba67c8c4cc6095b361e2b55750077ba331995e8c8a3d138d6cb4d64230f4d8a",
"0xaea2ae68e3153f45b3825c80a06fd2d33bdfd386b1d637d11ce582701f52ce9f",
"0xac2f5fdb02068feee644ac5de075aa65c48d617951527fc75fdbdb9d5d1706f9",
"0x2508776a8ba51651f8d2565f73acc871d1c4c520f4e729b4998f6b559d53865b",
"0x2b4346111b31cbd5277861af88ad0ba82245f3ed58def804215dbc6e0c36526f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

