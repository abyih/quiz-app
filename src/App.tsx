interface QuizQuestion {
  question: string;
  choices: string[];
  correctAnswerIndex: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Who was the king that won",
    choices: [],
    correctAnswerIndex: 0,
  },
];

const App = () => {
  return (
    <div className="flex justify-center">
      <p className="text-3xl">Quiz App</p>
    </div>
  );
};

export default App;
