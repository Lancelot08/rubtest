import React, {
  useEffect,
  useState
} from "react";
import {
  useDispatch,
  useSelector
} from "react-redux";
import {
  connect
} from "./redux/blockchain/blockchainActions";
import {
  fetchData
} from "./redux/data/dataActions";
import getProof from "./redux/data/merkleProof";
import {
  chakra,
  Box,
  VStack,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Flex,
  Image
} from '@chakra-ui/react';
import Sj from "./components/callConnect";
import HeadOne from "./components/header";

import CTA from "./components/callToAction";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  //const nftAmount = useSelector((state) => state.nftAmount);
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure()
  document.body.style = 'background: #F5C141;';
  let textInput = null;
  const refValue = React.createRef();

  const setTextInputRef = (element) => {
    textInput = element;
  };



  const claimNFTs = (_amount) => {
    //alert(_amount);

    console.log(textInput);

    setClaimingNft(true);
    const proof = getProof(blockchain.account);
    //alert(proof);
    if (Array.isArray(proof) && proof.length) {
      //alert("Proof is Right")
      blockchain.smartContract.methods
        .mint(_amount, proof)
        .send({

          to: "0x4B2467B2C993bAc0f18A7ef2a54c0c8437A61Aa6",
          from: blockchain.account,
          value: blockchain.web3.utils.toWei((0.01 * _amount).toString(), "ether"),
        })
        .once("error", (err) => {
          onClose();
          console.log(err);
          setFeedback("It seems the transaction was cancelled.");
          setClaimingNft(false);

        })
        .then((receipt) => {
          onClose();
          setFeedback(
            "Quack Quack! You just minted " + _amount + " Rubber Duckz! Visit Opensea.io to view your randomly generated NFT!"
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    } else {
      setFeedback(" You are not in the whitelist!!");
      onClose()
      setClaimingNft(false);
    }


  };


  const getEstimateGas = async (_amount) => {

    const lastBlock = await blockchain.web3.eth.getBlock("latest");
    console.log(lastBlock);
    if (_amount <= 0) {
      return;
    }
    setFeedback("Preparing your NFT(s)...");
    setClaimingNft(true);
    //        to: "0xc5ba70371Db9E571673C93258b3528800Be76dED",
    var quanti = 0
    if (_amount == 10) {
      quanti = 9;
    } else {
      quanti = _amount;
    }
    const gasLimit = 160000 * _amount;
    const tx = blockchain.smartContract.methods.mint(blockchain.account, 1);

    try {
      const gasCost = await tx.estimateGas({ from: blockchain.account });
      alert(gasCost);
      const gasPrice = await blockchain.web3.eth.getGasPrice();
      alert(gasPrice);
      const data = tx.encodeABI();
      const txData = {
        from: blockchain.account,
        data,
        gas: gasCost,
        gasPrice
      };
      console.log(txData);


    } catch (e) {
      console.log(e)
    }
  };


  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (

    <Box textAlign="center"
      fontSize="xl"
      bg="#F5C141" >
      <  HeadOne />
      {
        blockchain.account === "" ||
          blockchain.smartContract === null ? (<  VStack spacing={
            2
          }
            ai={
              "center"
            } >
            <  Sj mainText=""

              onClick={
                (e) => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }
              }
            /> </VStack >


        ) : (
          <VStack spacing={
            4
          }>


            <CTA referral={refValue} handleClick={
              (contatore) => {
                onOpen()
                claimNFTs(contatore);
                getData();
              }
            } />
            <Flex direction="column"
              alignItems="center"
              justifyContent="center">
              <chakra.p
                pr={{ base: 0, lg: 16 }}
                mb={4}
                fontSize="4xl"
                color="#8f0100"
                fontFamily='wf_e4b1e1e4405343d9ad0296011'
                letterSpacing="wider"
                textTransform="uppercase"
              >{data.totalSupply}/2000</chakra.p>
              <chakra.p
                pr={{ base: 0, lg: 16 }}
                mb={4}
                fontSize="md"
                color="#8f0100"
                fontFamily='lulo-clean-w01-one-bold'
                letterSpacing="wider"
                textTransform="uppercase"
              >{feedback}</chakra.p>

            </Flex>




            <Modal closeOnOverlayClick={false}
              isOpen={
                isOpen
              }
              onClose={
                onClose
              }
              isCentered size="xl" motionPreset='slideInBottom' >
              <ModalOverlay />
              <ModalContent bg="#8f0100" >

                <ModalBody borderRadius='lg'>
                  <Center bg="#8f0100">
                    <Flex
                      align="center"
                      justify={{ base: "center", md: "space-around", xl: "space-between" }}
                      direction={{ base: "column-reverse", md: "row" }}
                      wrap="no-wrap"
                      minH="70vh"
                      px={8}
                      mb={16}
                    >
                      <VStack >
                        <Image boxSize='300px'
                          objectFit='cover' borderRadius='15px' src="https://static.wixstatic.com/media/485d82_3d2a9c62bc6e43c7bc953bec8380439b~mv2.png"></Image>
                        <chakra.span fontSize="3xl"
                          textTransform="uppercase"
                          fontFamily='wf_e4b1e1e4405343d9ad0296011'
                          letterSpacing="wide" color="white"> MINT IN PROGRESS </chakra.span>
                      </VStack>


                    </Flex>

                  </Center>

                </ModalBody> </ModalContent >
            </Modal>


          </VStack>
        )
      } </Box >
  );
}

export default App;