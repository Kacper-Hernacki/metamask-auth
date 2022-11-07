import { useState } from "react";
import styled from "styled-components";
import MetamaskLogo from "./assets/Metamask-logo.png";

function App() {
  return (
    <Container>
      <div>
        <h1>Click to connect wallet with dApp</h1>
        <SelectBox>
          <img src={MetamaskLogo} />
        </SelectBox>
        <p>
          This dApp is a test platform created for learning purposes, do not
          make transactions or connect to Mainnet
        </p>
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
