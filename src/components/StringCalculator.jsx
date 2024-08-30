import React from "react";
import { test_add } from "../test/test_add";

const StringCalculator = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <p>StringCalculator</p>
      <button onClick={test_add} className="bg-blue-500 rounded-lg px-4 py-2 text-white">TEST</button>
    </div>
  );
};

export default StringCalculator;
