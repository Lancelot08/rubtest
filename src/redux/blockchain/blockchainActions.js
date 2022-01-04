// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import abi from "../../contracts/RubberDuckz";
import detectEthereumProvider from '@metamask/detect-provider'
// log
import {
  fetchData
} from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const provider = await detectEthereumProvider();
    if (provider) {

      console.log('Ethereum successfully detected!')

      // From now on, this should always be true:
      // provider === window.ethereum

      // Access the decentralized web!

      // Legacy providers may only have ethereum.sendAsync
      // Check if MetaMask is installed
      // MetaMask injects the global API into window.ethereum

      try {
        // check if the chain to connect to is installed
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x13881'
          }], // chainId must be in hexadecimal numbers
        });
      } catch (error) {
        // This error code indicates that the chain has not been added to MetaMask
        // if it is not, then install it into the user MetaMask
        //https://rpc-mumbai.matic.today
        if (error.code === 4902) {
          try {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x13881',
                rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
              }, ],
            });
          } catch (addError) {
            console.error(addError);
          }
        }
        console.error(error);
      }
      Web3EthContract.setProvider(provider);
      let web3 = new Web3(provider);
      try {
        const accounts = await provider.request({
          method: "eth_requestAccounts",
        });
        const networkId = 5777; //1337; //await provider.request({ method: "net_version", });
        // const NetworkData = await SmartContract.networks[networkId];
        if (1 == 1) {

          const SmartContractObj = new Web3EthContract(
            abi, "0x4B2467B2C993bAc0f18A7ef2a54c0c8437A61Aa6"
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          provider.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          provider.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed("Change network to Ethereum"));
        }
      } catch (err) {
        console.log(err)
        dispatch(connectFailed("Something went wrong"));
      }
    } else {

      // if the provider is not detected, detectEthereumProvider resolves to null
      console.error('Please install MetaMask!')
    }

    await provider.request({
      method: "eth_requestAccounts",
    });

  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({
      account: account
    }));
    dispatch(fetchData(account));
  };
};