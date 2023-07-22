import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import './GameOver.css';
import Img2 from '../src/img/Img2.svg';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Game Over</h2>
        <p>Punctuation: {quizState.score} </p>
        <p>You got {quizState.score} of {quizState.questions.length} {""} questions right.</p>
        <img src={Img2} alt="End Game" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Restart</button>
    </div>
  );
};

export default GameOver