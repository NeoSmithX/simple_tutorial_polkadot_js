const { ApiPromise} = require('@polkadot/api');
const { WsProvider} = require('@polkadot/rpc-provider')




async function main(){
    // Construct
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    // Do something
    console.log(api.genesisHash.toHex());
}
main().then(() => {
    console.log('test end');
});