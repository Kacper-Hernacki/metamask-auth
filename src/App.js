import { useState } from "react";
import styled from "styled-components";
import MetamaskLogo from "./assets/Metamask-logo.png";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  return (
    <Container>
      <div>
        {walletAddress && walletAddress.length > 0 ? (
          <WalletDetails>
            <h1>
              Connected:
              <p>
                {walletAddress.substring(0, 6)}...
                {walletAddress.substring(38)}
              </p>
            </h1>
          </WalletDetails>
        ) : (
          <>
            <h1>Click to connect wallet with dApp</h1>
            <SelectBox onClick={connectWallet}>
              <img src={MetamaskLogo} />
            </SelectBox>{" "}
            <p>
              This dApp is a test platform created for learning purposes, do not
              make transactions or connect to Mainnet
            </p>
          </>
        )}
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00001a;
  display: grid;
  place-items: center;

  h1 {
    color: white;
    font-size: 72px;
    width: 100%;
    text-align: center;
    margin-bottom: 92px;
  }

  p {
    color: white;
    margin-top: 32px;
    font-size: 24px;
    width: 100%;
    text-align: center;
  }
`;

const SelectBox = styled.div`
  border: 3px solid white;
  border-radius: 36px;
  padding: 30px;
  background-color: white;
  cursor: pointer;
`;

const WalletDetails = styled.span`
  color: white;
  display: flex;
  p {
    font-weight: bold;
    margin-left: 6px;
    font-size: 32px;
  }
`;
