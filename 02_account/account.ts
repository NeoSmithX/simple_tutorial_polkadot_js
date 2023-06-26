const { ApiPromise} = require('@polkadot/api');
const { WsProvider} = require('@polkadot/rpc-provider')
const { Keyring } = require('@polkadot/api');



async function main(){
    // Construct
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    // create account 1
    const seed_phase = 'entire material egg meadow latin bargain dutch coral blood melt acoustic thought'
    const keyring = new Keyring({ type: 'sr25519' })
    const signer = keyring.addFromUri(seed_phase)
    const anyChainAddress = signer.address
    console.log('address: '+ anyChainAddress)

    // create account 2
    const seed_phase_2 = seed_phase + "//word1//word2"
    const signer_2 = keyring.addFromUri(seed_phase_2)
    const anyChainAddress_2 = signer_2.address
    console.log('address_2: '+ anyChainAddress_2)

    // account balance
    
    const account_info = await api.query.system.account(anyChainAddress)
    console.log('account_info: ' + account_info)

}
main().then(() => {
    console.log('test end');
});