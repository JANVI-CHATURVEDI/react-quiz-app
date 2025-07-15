import React, { useState } from "react";
import Questions from "./components/Questions";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleanswer = (answer) =>{
    if(answer === Questions[currentQuestion].answer){
        setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < Questions.length){
      setCurrentQuestion(nextQuestion)
    }
    else{
      setShowResult(true);
    }
      
  }

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <>
      <div>
        {(!showResult)? 
        (<QuestionCard question ={Questions[currentQuestion]} onAnswer={handleanswer} total={Questions.length} currentQuestion={currentQuestion} />)
        :(<Result score={score} total={Questions.length}  onrestart={restartQuiz}  />)}
      </div>

    </>
  )
}

export default App
