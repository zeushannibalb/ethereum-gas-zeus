# ethereum-gas-zeus
learn how to publish npm
- npm install @zeushannibalb/ethereum-gas-zeus
- CODE EXAMPLE :
    ```Javascript
    const gasPrice = require('@cicciocoin/ethereum-gas');

    gasPrice("YOUR_RPC_URL").then((gasPriceEther) => {
    console.log('Gas price in ether:', gasPriceEther);
    }).catch((error) => {
    console.error('Error:', error);
    });
