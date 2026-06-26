import Quiz from "@/components/quiz";

const App = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center min-h-lvh">
      <p className="text-4xl">Quiz App</p>
      <Quiz />
    </div>
  );
};

export default App;
