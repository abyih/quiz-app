import type { QuizType } from "@/types";
import Quiz from "@/components/quiz";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const quizs: QuizType[] = [
  {
    question: "What is 1 + 1",
    choices: ["2", "1", "3", "0"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is 1 + 1",
    choices: ["2", "1", "3", "0"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is 1 + 1",
    choices: ["2", "1", "3", "0"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is 1 + 1",
    choices: ["2", "1", "3", "0"],
    correctAnswerIndex: 0,
  },
];

const App = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);

  const handleClick = () => {
    if (currentQuizIndex < quizs.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    }
  };
  return (
    <div className="flex flex-col space-y-4 justify-center items-center min-h-lvh">
      <p className="text-4xl">Quiz App</p>
      <Quiz
        quiz={quizs[currentQuizIndex]}
        index={currentQuizIndex}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
