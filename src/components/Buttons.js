import styled from "styled-components";
import certo from "../assets/icone_certo.png";
import erro from "../assets/icone_erro.png";
import quase from "../assets/icone_quase.png";

let right = 0;

export default function Buttons(props) {
  const {
    showAnswer,
    answered,
    setAnswered,
    pressed,
    setPressed,
    setShowAnswer,
    answerColor,
    setAnswerColor,
    answerIcon,
    setAnswerIcon,
    size,
    meta,
  } = props;

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

    if (icon === certo) {
      right++;
    }

    if (newAnswered.length === size && right >= meta) {
      alert(`Parabéns! Você atingiu sua meta de ${meta} Zaps`);
    } else if (newAnswered.length === size && right < meta) {
      alert(`Putz! Você não atingiu sua meta de ${meta} Zaps`);
    }
  }

  return (
    <ButtonContainer>
      <Button
        color="red"
        onClick={() => toAnswer("#FF3030", erro)}
        disabled={!showAnswer}
        data-identifier="forgot-btn"
      >
        Não lembrei
      </Button>
      <Button
        color="yellow"
        onClick={() => toAnswer("#FF922E", quase)}
        disabled={!showAnswer}
        data-identifier="almost-forgot-btn"
      >
        Quase não lembrei
      </Button>
      <Button
        color="green"
        onClick={() => toAnswer("#2FBE34", certo)}
        disabled={!showAnswer}
        data-identifier="zap-btn"
      >
        Zap!
      </Button>
    </ButtonContainer>
  );
}

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

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  margin-top: 20px;
`;

const Button = styled.button`
  width: 80px;
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
