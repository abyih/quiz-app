import type { QuizType } from "@/types";
import Quiz from "@/components/quiz";

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
  return (
    <div className="flex justify-center items-center min-h-lvh">
      <p className="text-4xl">Quiz App</p>
      {quizs.map((quiz, index) => (
        <Quiz key={index} quiz={quiz} index={index} />
      ))}
    </div>
  );
};

export default App;
