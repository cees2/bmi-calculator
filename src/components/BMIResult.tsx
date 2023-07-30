import React from "react";

interface Props {
  height: number;
  weight: number;
  heightUnit: string;
  weightUnit: string;
}

const getBMI = (
  height: number,
  weight: number,
  heightUnit: string,
  weightUnit: string
) => {
  let newHeight = height;
  let newWeight = weight;

  if (heightUnit === "us")
    (newHeight = 0.3048 * height + heightInches * 2.54) * 100;
  if (weightUnit === "us") newWeight = 0.4536 * weight;

  return (newWeight / Math.pow(newHeight / 100, 2)).toFixed(2);
};

export const BMIResult = (props: Props) => {
  const { weight, height, heightUnit, weightUnit } = props;

  const bmi = getBMI(height, weight, heightUnit, weightUnit);

  return <p className="bmi-result">Your bmi: {bmi}</p>;
};
