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
  return "feet";
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

  const setHeightValue = (e) => {
    const formattedValue = e.target.value.trim().replace(",", ".");
    setHeight(formattedValue);
  };

  const setHeightInchesValue = (e) => {
    const formattedValue = e.target.value.trim().split(",")[0];
    setHeightInches(formattedValue);
  };

  const setWeightValue = (e) => {
    const formattedValue = e.target.value.trim().replace(",", ".");
    setWeight(formattedValue);
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
            onChange={setWeightValue}
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
            onChange={setHeightValue}
          />
        </div>
        {unit === "us" && (
          <div className="single-input-wrapper">
            <label htmlFor="height" className="bmi-form-label">
              Height [inches]
            </label>
            <input
              type="text"
              id="height"
              className="bmi-input"
              value={heightInches}
              onChange={setHeightInchesValue}
            />
          </div>
        )}
        <button type="submit" className="btn">
          Count
        </button>
      </form>
    </div>
  );
};
