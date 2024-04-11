const { Web3 } = require('web3');

// Get the gas of Ethereum
async function ethereumGas(rpc_url) {
  const web3 = new Web3(rpc_url);
  const gasPrice = await web3.eth.getGasPrice();
  const gasPriceEther = web3.utils.fromWei(gasPrice, "ether");
  return gasPriceEther;
}

module.exports = ethereumGas;


