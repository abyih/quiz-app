import type { QuizType } from "src/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field, FieldContent, FieldLabel } from "./ui/field";

const Quiz = ({ quiz, index }: { quiz: QuizType; index: number }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          {index + 1}. {quiz.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup>
          {quiz.choices.map((choice, index) => (
            <FieldLabel>
              <Field orientation="horizontal">
                <FieldContent>{choice}</FieldContent>
                <RadioGroupItem value={index.toString()} />
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Quiz;
