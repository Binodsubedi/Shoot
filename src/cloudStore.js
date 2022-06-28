import web3 from './web3';

const address = '0xBB333bBb3fA17b55c0F7352d8F21CadA3aA0A3e3';

const abi = [
  {
    constant: false,
    inputs: [{ name: 'value', type: 'uint256' }],
    name: 'payment',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
];
// @ts-ignore
export default new web3.eth.Contract(abi, address);
