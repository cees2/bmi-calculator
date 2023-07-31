import React from "react";

export const BMIDefinition = () => {

  return (
    <div className="bmi-definition-container">
      <h2 className="bmi-header">BMI</h2>
      <p className="header-paragraph text-bold">
        The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.
      </p>
      <p className="header-paragraph">
        The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.</p>
      <div className="bmi-definition-source">
         <p className="bmi-definition-webpage">Source: https://www.nhs.uk/common-health-questions/lifestyle/what-is-the-body-mass-index-bmi/</p>
      </div>
    </div>
  );
};
