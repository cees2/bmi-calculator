import { BMIDefinition } from "./components/BMIDefinition";
import { BMIForm } from "./components/BMIForm";
import { BMIResult } from "./components/BMIResult";
import "./index.css";
import { useState } from "react";

export const enum Units {
  metric = "metric",
  us = "us",
}

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [heightInches, setHeightInches] = useState(0);
  const [unit, setUnit] = useState<Units>(Units.metric);
  const [showResult, setShowResult] = useState(false);
  //zrobic useReducerem

  return (
    <div className="bmi-calculator-container">
      <BMIDefinition />
      <BMIForm
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        setShowResult={setShowResult}
        unit={unit}
        setUnit={setUnit}
        heightInches={heightInches}
        setHeightInches={setHeightInches}
      />
      {showResult && (
        <BMIResult
          weight={weight}
          height={height}
          heightInches={heightInches}
          unit={unit}
          heightInches={heightInches}
        />
      )}
    </div>
  );
}

export default App;
