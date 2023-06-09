import React, { useState } from "react";
export default function App() {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };
  return (
      <div className="App">
        <form onSubmit={calculate}>
          <div>
            <label>Height (m)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Weight (kg)</label>
            <input value={mass} onChange={(e) => setMass(e.target.value)} />
          </div>
          <button type="submit">calculate</button>
        </form>
        <p>bmi: {bmi}</p>
      </div>
  );
}