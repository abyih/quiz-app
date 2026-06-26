import type { QuizType } from "src/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field, FieldContent, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { useState } from "react";
import { CircleCheck, CircleX } from "lucide-react";
import { useAtom } from "jotai";
import { currentQuizAtom, quizOverAtom } from "@/atoms";
import { quizs } from "@/data";

const Quiz = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useAtom(currentQuizAtom);
  const [quizOver, setQuizOver] = useAtom(quizOverAtom);
  const quiz = quizs[currentQuizIndex];
  const [selectedValue, setSelectedValue] = useState<string>("");
  // const [correctAnswered, setCorrectAnswered] = useState<boolean | null>(null);
  const handleClick = () => {
    if (currentQuizIndex < quizs.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    }
    if (currentQuizIndex == quizs.length - 1) {
      setQuizOver(true);
    }
    if (quiz.correctAnswerIndex == parseInt(selectedValue)) {
    }
  };
  return (
    <>
      <Card className="w-full max-w-sm">
        {/* {correctAnswered !== null && (
          <>
            <CardContent className="w-full flex flex-col items-center space-y-3">
              {correctAnswered ? (
                <CircleCheck color="green" size={60} />
              ) : (
                <>
                  <CircleX color="red" size={60} />
                  <FieldLabel>
                    <Field orientation="horizontal">
                      <FieldContent>
                        <span className="text-green-800">
                          Correct Answer:{" "}
                          {quiz.choices[quiz.correctAnswerIndex]}
                        </span>
                      </FieldContent>
                    </Field>
                  </FieldLabel>
                </>
              )}
            </CardContent>
          </>
        )}
          <> */}
        <CardHeader>
          <CardTitle>
            {currentQuizIndex + 1}. {quiz.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup onValueChange={setSelectedValue} value={selectedValue}>
            {quiz.choices.map((choice, index) => (
              <FieldLabel key={index} className="bg-green-300/50">
                <Field orientation="horizontal">
                  <FieldContent>{choice}</FieldContent>
                  <RadioGroupItem value={index.toString()} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
      <Button
        className="w-full max-w-sm"
        onClick={handleClick}
        disabled={currentQuizIndex > quizs.length - 1}
      >
        Choose
      </Button>
    </>
  );
};

export default Quiz;
