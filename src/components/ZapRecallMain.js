import Footer from "./Footer";
import Questions from "./Questions";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function ZapRecallMain({selectedDeck, meta}) {
  const [answerIcon, setAnswerIcon] = useState([]);

  return (
    <ScreenContainer>
      <LogoContainer>
        <img src={logo} alt="Logo do Flash" />
        <h1>ZapRecall</h1>
      </LogoContainer>
      <Questions
        deck={selectedDeck}
        answerIcon={answerIcon}
        setAnswerIcon={setAnswerIcon}
        meta={meta}
      />
      <Footer
        deckSize={selectedDeck.length}
        answerIcon={answerIcon}
      />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: 52px;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;