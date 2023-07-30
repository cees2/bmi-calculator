import React from "react";
import { Units } from "../App";

interface Props {
  height: number;
  setHeight: (number) => void;
  weight: number;
  setWeight: (number) => void;
  setShowResult: (boolean) => void;
  unit: boolean;
  setUnit: (boolean) => void;
  heightInches: number;
  setHeightInches: (number) => void;
}

const getHeightUnit = (type: Units) => {
  if (type === Units.metric) return "cm";
  return "ft/i";
};

const getWeightUnit = (type: Units) => {
  if (type === Units.metric) return "kg";
  return "lbs";
};

export const BMIForm = (props: Props) => {
  const {
    height,
    setHeight,
    weight,
    setWeight,
    setShowResult,
    unit,
    setUnit,
    heightInches,
    setHeightInches,
  } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    setShowResult(true);
  };

  return (
    <div className="bmi-form-container">
      <div className="units-input">
        <select
          className="select-input"
          onChange={(e) => setUnit(e.target.value)}
          value={unit}
        >
          <option value="metric">Metric Units</option>
          <option value="us">US Units</option>
        </select>
      </div>
      <form className="bmi-form" onSubmit={onSubmit}>
        <div className="single-input-wrapper">
          <label htmlFor="weight" className="bmi-form-label">
            {`Weight [${getWeightUnit(unit)}]`}
          </label>
          <input
            type="text"
            id="weight"
            className="bmi-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="single-input-wrapper">
          <label htmlFor="height" className="bmi-form-label">
            {`Height [${getHeightUnit(unit)}]`}
          </label>
          <input
            type="text"
            id="height"
            className="bmi-input"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          {unit === "us" && (
            <div>
              <label htmlFor="height" className="bmi-form-label">
                Inches
              </label>
              <input
                type="text"
                id="height"
                className="bmi-input"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
              />
            </div>
          )}
        </div>
        <button type="submit" className="btn">
          Count
        </button>
      </form>
    </div>
  );
};
