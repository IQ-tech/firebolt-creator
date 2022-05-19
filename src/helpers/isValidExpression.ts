import evaluate from "simple-evaluate";

export default function isValidExpression(expression: string) {
  let isValidExpression = false;
  try {
    evaluate({ step: {} }, expression);
    isValidExpression = true;
  } catch (err) {
    isValidExpression = false;
  }

  return isValidExpression;
}
