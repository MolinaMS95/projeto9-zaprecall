import styled from "styled-components";

export default function Answers() {
  return (
    <FooterConcluded>
      <div className="button-container">
        <Button color="green">Não lembrei</Button>
        <Button color="yellow">Quase não lembrei</Button>
        <Button color="red">Zap!</Button>
      </div>
      <TextConcluded>0/4 CONCLUÍDOS</TextConcluded>
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
