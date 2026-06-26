import Quiz from "@/components/quiz";
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { useAtom } from "jotai";

const App = () => {
  const [finished, setFinished] = useState<boolean>(false);

  const [correctAnswered, setCorrectAnswered] = useState<number>(0);
  // const handleClick = (correct: boolean) => {
  //   if (currentQuizIndex < quizs.length - 1) {
  //     setCurrentQuizIndex(currentQuizIndex + 1);
  //     if (correct) {
  //       setCorrectAnswered(correctAnswered + 1);
  //     }
  //   } else {
  //     setFinished(true);
  //   }
  // };
  return (
    <div className="flex flex-col space-y-4 justify-center items-center min-h-lvh">
      <p className="text-4xl">Quiz App</p>
      <Quiz />
    </div>
  );
};

export default App;
