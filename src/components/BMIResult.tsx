import React from "react";

interface Props {
  height: number;
  heightInches?: number;
  weight: number;
  unit: string;
}

const getBMI = (
  height: number,
  weight: number,
  unit,
  heightInches?: number
) => {
  let newHeight = height;
  let newWeight = weight;

  if (unit === "us") {
    newHeight = (0.3048 * height + heightInches * 0.0254) * 100;
    newWeight = 0.4536 * weight;
  }

  return (newWeight / Math.pow(newHeight / 100, 2)).toFixed(2);
};

export const BMIResult = (props: Props) => {
  const { weight, height, unit, heightInches } = props;

  const bmi = getBMI(height, weight, unit, heightInches);

  return <p className="bmi-result">Your bmi: {bmi}</p>;
};
