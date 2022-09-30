import { useState } from "react";
import styled from "styled-components";
import certo from "../assets/icone_certo.png"
import erro from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"

export default function Answers(props) {
  const {
    showAnswer,
    answered,
    setAnswered,
    pressed,
    setPressed,
    setShowAnswer,
    answerColor,
    setAnswerColor,
    deckSize,
    answerIcon,
    setAnswerIcon
  } = props;
  const [completed, setCompleted] = useState(0);

  function toAnswer(color, icon) {
    const newAnswered = [...answered];
    newAnswered.push(pressed[0]);
    setAnswered(newAnswered);

    const newAnswerColor = [...answerColor];
    newAnswerColor[pressed[0]] = color;
    setAnswerColor(newAnswerColor);

    const newAnswerIcon = [...answerIcon];
    newAnswerIcon[pressed[0]] = icon;
    setAnswerIcon(newAnswerIcon);

    setPressed([]);
    setShowAnswer(false);
    setCompleted(completed + 1);
  }

  return (
    <FooterConcluded>
      <div className="button-container">
        <Button
          color="red"
          onClick={() => toAnswer("#FF3030", erro)}
          disabled={!showAnswer}
        >
          Não lembrei
        </Button>
        <Button
          color="yellow"
          onClick={() => toAnswer("#FF922E", quase)}
          disabled={!showAnswer}
        >
          Quase não lembrei
        </Button>
        <Button
          color="green"
          onClick={() => toAnswer("#2FBE34", certo)}
          disabled={!showAnswer}
        >
          Zap!
        </Button>
      </div>
      <TextConcluded>{completed}/{deckSize} CONCLUÍDOS</TextConcluded>
    </FooterConcluded>
  );
}

const FooterConcluded = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  .button-container {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
`;

function changeButtonColor(color) {
  switch (color) {
    case "green":
      return "#2FBE34";

    case "yellow":
      return "#FF922E";

    case "red":
      return "#FF3030";

    default:
      return "";
  }
}

const Button = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => changeButtonColor(props.color)};
  border-radius: 5px;
  border: none;
  padding: 5px;
`;

const TextConcluded = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;

  margin-top: 20px;
  margin-bottom: 10px;
`;