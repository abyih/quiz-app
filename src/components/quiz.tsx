import type { QuizType } from "src/types";
import { Card } from "@/components/ui/card";

const Quiz = ({ quiz, index }: { quiz: QuizType; index: number }) => {
  return (
    <Card>
      <p>
        {index + 1}. {quiz.question}
      </p>
    </Card>
  );
};

export default Quiz;
