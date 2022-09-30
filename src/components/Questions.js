import Flashcards from "./Flashcards.js";

export default function Questions(props) {
  const {
    showAnswer,
    setShowAnswer,
    pressed,
    setPressed,
    answered,
    answerColor,
    deck,
    answerIcon
  } = props;
  const layout = [];

  deck.forEach((flash, index) => {
    layout.push(
      <Flashcards
        key={index}
        index={index}
        question={flash.question}
        answer={flash.answer}
        pressed={pressed}
        setPressed={setPressed}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        answered={answered}
        answerColor={answerColor}
        answerIcon={answerIcon}
      />
    );
  });

  return <>{layout}</>;
}
