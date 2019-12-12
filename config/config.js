

const braintree = require('braintree');



export const AppConfig = {
    environment: 'sandbox',
    availablePlan:['hp2w'],
    enableDebug: true,
    sandbox: {
        environment: braintree.Environment.Sandbox,
        merchantId: 'z23jqghp8ysp54dg',
        publicKey: 'b4v82hg9rkg8246m',
        privateKey: '5e1882cba82ecc35f8ef42f34da9710d'
    }
}