import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Img1 from "../src/img/Img1.svg";
import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome"> 
        <h2>Welcome</h2>
        <p>Click the button below to get started:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Start</button>
        <img src={Img1} alt="start of the quiz" />
    </div>
  );
};

export default Welcome