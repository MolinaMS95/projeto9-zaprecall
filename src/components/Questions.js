import Flashcards from "./Flashcards.js";
import { useState } from "react";

export default function Questions(props) {

  const [showAnswer, setShowAnswer] = useState(false);
  const [pressed, setPressed] = useState([]);
  const [answered, setAnswered] = useState([]);
  const [answerColor, setAnswerColor] = useState([]);

  const {
    deck,
    answerIcon,
    setAnswerIcon,
    meta
  } = props;
  const layout = [];

  deck.forEach((flash, index) => {
    layout.push(
      <Flashcards
        key={index}
        index={index}
        size={deck.length}
        question={flash.question}
        answer={flash.answer}
        pressed={pressed}
        setPressed={setPressed}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        answered={answered}
        answerColor={answerColor}
        answerIcon={answerIcon}
        setAnswered={setAnswered}
        setAnswerColor={setAnswerColor}
        setAnswerIcon={setAnswerIcon}
        meta={meta}
      />
    );
  });

  return <>{layout}</>;
}
