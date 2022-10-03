import Answers from "./Answers";
import Questions from "./Questions";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function ZapRecallMain({selectedDeck}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [pressed, setPressed] = useState([]);
  const [answered, setAnswered] = useState([]);
  const [answerColor, setAnswerColor] = useState([]);
  const [answerIcon, setAnswerIcon] = useState([]);

  return (
    <ScreenContainer>
      <LogoContainer>
        <img src={logo} alt="Logo do Flash" />
        <h1>ZapRecall</h1>
      </LogoContainer>
      <Questions
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        answered={answered}
        pressed={pressed}
        setPressed={setPressed}
        answerColor={answerColor}
        deck={selectedDeck}
        answerIcon={answerIcon}
      />
      <Answers
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        answered={answered}
        setAnswered={setAnswered}
        pressed={pressed}
        setPressed={setPressed}
        answerColor={answerColor}
        setAnswerColor={setAnswerColor}
        deckSize={selectedDeck.length}
        answerIcon={answerIcon}
        setAnswerIcon={setAnswerIcon}
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