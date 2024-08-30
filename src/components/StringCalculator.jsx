import React, { useState } from "react";
import { test_add } from "../test/test_add";
import { add } from "../utils/add";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    setResult(null);
  };

  const handleCalculate = (e) => {
    try {
      setResult(add(input));
    } catch (e) {
      setResult(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl mb-4">String Calculator</h1>
      <textarea
        type="text"
        className="p-2 mb-4 w-80 rounded shadow focus:outline-none focus:ring-0"
        value={input}
        onChange={handleChange}
        placeholder="Enter comma separated numbers"
      />
      <button
        type="button"
        onClick={handleCalculate}
        className={`bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-700 
          `}
      >
        Calculate
      </button>
      {result !== null && <p className="text-green-500">Result: {result}</p>}
      {/* <button
        type="button"
        onClick={() => test_add()}
        className="bg-blue-500 rounded-lg px-4 py-2 text-white"
      >
        TEST
      </button> */}
    </div>
  );
};

export default StringCalculator;
