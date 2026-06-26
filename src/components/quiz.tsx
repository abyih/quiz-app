import type { QuizType } from "src/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field, FieldContent, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { useState } from "react";

const Quiz = ({
  quiz,
  index,
  onClick,
}: {
  quiz: QuizType;
  index: number;
  onClick: () => void;
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const handleClick = () => {
    console.log(selectedValue);
    // onClick();
  };
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            {index + 1}. {quiz.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup onValueChange={setSelectedValue} value={selectedValue}>
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
      </Card>
      <Button className="w-full max-w-sm" onClick={handleClick}>
        Choose
      </Button>
    </>
  );
};

export default Quiz;
