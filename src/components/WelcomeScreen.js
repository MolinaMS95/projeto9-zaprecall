import styled from "styled-components";
import logo from "../assets/logo.png";

export default function WelcomeScreen({
  setStart,
  decks,
  setSelectedDeck,
  setMeta,
  selectedDeck,
  meta
}) {

  function startGame(){
    if(selectedDeck !== '' && meta >= 1 && meta <= selectedDeck.length){
      setStart(true);
    }
    else{
      alert(`Escolha um deck e uma meta entre 1 e ${selectedDeck.length}`)
    }
  }

  return (
    <ScreenContainer>
      <LogoContainer>
        <img src={logo} alt="Logo do Flash" />
        <h1>ZapRecall</h1>
      </LogoContainer>
      <DeckSelector onChange={(e) => setSelectedDeck(decks[e.target.value])}>
        <option disabled selected>
          Escolha seu deck
        </option>
        <option value="0">React</option>
        <option value="1">Naruto</option>
      </DeckSelector>
      <ZapMetaInput
        placeholder="Digite sua meta de zaps..."
        onChange={(e) => setMeta(e.target.value)}
      />
      <StartButton onClick={startGame}>Iniciar Recall!</StartButton>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: 136px;
    height: 161px;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-top: 20px;
  }
`;

const StartButton = styled.button`
  width: 246px;
  height: 54px;

  border: 1px solid #d70900;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  background: #ffffff;

  font-family: "Recursive";
  font-size: 18px;
  text-align: center;
  color: #d70900;

  margin-top: 30px;
`;

const DeckSelector = styled.select`
  width: 246px;
  height: 43px;
  border-radius: 5px;
  border: none;
  background: #ffffff;

  font-family: "Roboto";
  font-size: 14px;
`;

const ZapMetaInput = styled.input`
  width: 246px;
  height: 43px;
  border-radius: 5px;
  border: none;
  background: #ffffff;

  font-family: "Roboto";
  font-size: 14px;

  margin-top: 30px;
`;
