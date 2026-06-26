import type { QuizType } from "src/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field, FieldContent, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { useState } from "react";
import { CircleCheck, CircleX } from "lucide-react";

const Quiz = ({
  quiz,
  index,
  onClick,
}: {
  quiz: QuizType;
  index: number;
  onClick: (correct: boolean) => void;
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [correctAnswered, setCorrectAnswered] = useState<boolean | null>(null);
  const handleClick = () => {
    if (quiz.correctAnswerIndex == parseInt(selectedValue)) {
      setCorrectAnswered(true);
      setTimeout(() => {
        onClick(true);
        setCorrectAnswered(false);
      }, 2000);
    } else {
      setCorrectAnswered(false);
      setTimeout(() => {
        onClick(false);
        setCorrectAnswered(false);
      }, 2000);
    }
  };
  return (
    <>
      <Card className="w-full max-w-sm">
        {correctAnswered !== null && (
          <>
            <CardContent className="w-full flex justify-center">
              {correctAnswered ? (
                <CircleCheck color="green" size={60} />
              ) : (
                <CircleX color="red" size={60} />
              )}
            </CardContent>
          </>
        )}
        {correctAnswered == null && (
          <>
            <CardHeader>
              <CardTitle>
                {index + 1}. {quiz.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                onValueChange={setSelectedValue}
                value={selectedValue}
              >
                {quiz.choices.map((choice, index) => (
                  <FieldLabel key={index}>
                    <Field orientation="horizontal">
                      <FieldContent>{choice}</FieldContent>
                      <RadioGroupItem value={index.toString()} />
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
            </CardContent>
          </>
        )}
      </Card>
      <Button className="w-full max-w-sm" onClick={handleClick}>
        Choose
      </Button>
    </>
  );
};

export default Quiz;
