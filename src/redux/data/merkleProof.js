import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";

const getProof = (address) => {

    const addresses = [
        "0xF7FF641b7840e7B74c858fbc9b1795d3f2a33bD9",
        "0x680E91F1181B07d9935FCf45419dfdD5265CC11B",
        "0x5E36f5f04cCeE8a5736D9411061349f36067BbBD",
        "0x2C512EEA0aC7b174e2b9e1F6a447b537d0D89e86",
        "0x2B368de91937CEafbe9d8e96fe9156054DCA7EF2",
        "0x000000000000000000000000000000000000dEaD",
    ]
    const invalidAddresses = [
        "0x8B3bb8347da9eB3eB5fB12FB400298245695159b",
        "0x1dD8E903CC9Dae9FBEC7F7b4213992B2F5deC395",

    ]
    const hexAddress = keccak256(address);

    const leafNodes = addresses.map((addr) => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {
        sortPairs: true,
    });

    const rootHash = merkleTree.getHexRoot();
    console.log("Hash Root:", rootHash);

    const hexProof = merkleTree.getHexProof(hexAddress);
    console.log("Valid address proff", hexProof);
    return hexProof;
}

export default getProof;