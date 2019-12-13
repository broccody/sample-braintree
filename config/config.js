

const braintree = require('braintree');



export const AppConfig = {
    environment: 'sandbox',
    availablePlan:[
        'free',
        'free_tier',
        'monthly_small_business_1',
        'monthly_small_business_2',
        'monthly_small_business_3',
        'monthly_middle_business_1',
        'monthly_middle_business_2',
        'monthly_middle_business_3',
        'monthly_large_business_1',
        'monthly_large_business_2',
        'monthly_large_business_3',
    ],
    enableDebug: true,
    sandbox: {
        environment: braintree.Environment.Sandbox,
        merchantId: 'httchtvjtmk8q6z3',
        publicKey: 'sh8588ds4btxrqcb',
        privateKey: '05a3384e1c5414f622d0a80573bfea7a'
    }
}