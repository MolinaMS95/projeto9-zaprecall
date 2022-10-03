import { useState } from "react";
import GlobalStyle from "../assets/GlobalStyle";
import WelcomeScreen from "./WelcomeScreen";
import ZapRecallMain from "./ZapRecallMain";
import decks from "../assets/deck";

export default function App() {
  const [start, setStart] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState("");
  const [meta, setMeta] = useState(0);
  return (
    <>
      <GlobalStyle />
      {start ? (
        <ZapRecallMain selectedDeck={selectedDeck} meta={meta}/>
      ) : (
        <WelcomeScreen
          setStart={setStart}
          decks={decks}
          setSelectedDeck={setSelectedDeck}
          setMeta={setMeta}
          selectedDeck={selectedDeck}
          meta={meta}
        />
      )}
    </>
  );
}
