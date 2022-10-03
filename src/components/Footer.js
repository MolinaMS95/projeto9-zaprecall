import styled from "styled-components";

export default function Footer(props) {
  const { deckSize, answerIcon } = props;

  const icons = [];
  let completed = 0;

  answerIcon.forEach((icon, index) => {
    if (icon) {
      icons[index] = <img key={index} src={icon} alt="icone" />;
      completed++;
    }
  });

  return (
    <FooterConcluded>
      <TextConcluded>
        {completed}/{deckSize} CONCLUÍDOS
      </TextConcluded>
      <Icons>{icons}</Icons>
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

const Icons = styled.div`
  display: flex;
  gap: 5px;
`;
