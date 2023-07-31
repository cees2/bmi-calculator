import React from "react";

const BMIScales = [
  {
    classification: "Underweight",
    bmiRangeFrom: 0,
    bmiRangeTo: 18.5,
    tableRowColor: "#c92626",
  },
  {
    classification: "Normal range",
    bmiRangeFrom: 18.5,
    bmiRangeTo: 24.9,
    tableRowColor: "#63ad13",
  },
  {
    classification: "Overweight(preobese)",
    bmiRangeFrom: 25,
    bmiRangeTo: 29.9,
    tableRowColor: "#f7ad59",
  },
  {
    classification: "Obese class 1",
    bmiRangeFrom: 30,
    bmiRangeTo: 34.9,
    tableRowColor: "#ed591a",
  },
  {
    classification: "Obese class 2",
    bmiRangeFrom: 35,
    bmiRangeTo: 39.9,
    tableRowColor: "#ed3a1a",
  },
  {
    classification: "Obese class 3",
    bmiRangeFrom: 40,
    tableRowColor: "#ff0000",
  },
];

export const BMIScale = (props) => {
  return (
    <table className="bmiscale-table">
      <thead>
        <tr>
          <th>Classification</th>
          <th>BMI Range</th>
        </tr>
      </thead>
      <tbody>
        {BMIScales.map((bmiScale, index) => {
          return (
            <tr
              key={index}
              className="bmiscale-table-content"
              style={{ backgroundColor: bmiScale.tableRowColor }}
            >
              <td>{bmiScale.classification}</td>
              <td>{`${bmiScale.bmiRangeFrom}${
                bmiScale.bmiRangeTo ? ` - ${bmiScale.bmiRangeTo}` : "+"
              }`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
