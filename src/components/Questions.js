import styled from "styled-components";
import DECK from "./Decks.js";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";

function Flashcards(props) {
  return (
    <>
      <ClosedQuestion>
        <p>{`Pergunta ` + props.number}</p>
        <img src={setaPlay} alt="seta play" />
      </ClosedQuestion>
      <OpenQuestion>
        <p>{props.question}</p>
        <img src={setaVirar} alt="seta virar" />
      </OpenQuestion>
    </>
  );
}

export default function Questions() {
  return (
    <>
      {DECK.map((flash, index) => (
        <Flashcards
          key={index}
          number={index}
          question={flash.question}
          answer={flash.answer}
        />
      ))}
    </>
  );
}

const ClosedQuestion = styled.div`
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  img {
    width: 15px;
    height: 18px;
  }
`;

const OpenQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
