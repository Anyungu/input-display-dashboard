import React, { useState } from "react";
import Display from "../components/Display";
import Input from "../components/Input";

function Dashboard() {
    
  // Input state
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");

  // Handle input one change
  function handleInputOneChange(e) {
    const re = /^[A-Za-z]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setInputOne(e.target.value);
    }
  }

  // Handle input two change
  function handleInputTwoChange(e) {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setInputTwo(e.target.value);
    }
  }

  // Handle input three change
  function handleInputThreeChange(e) {
    const re = /^[A-Za-z]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setInputThree(e.target.value);
    }
  }

  // Display the child components:- Input and Display
  return (
    <div>
      <div className="border-2 bg-gray-300 border-slate-500 rounded-lg h-3/4 w-3/6 mx-auto mt-20 justify-between">
        <div className="text-center text-3xl my-2 text-blue-500">
          <h3>Input Display Dashboard</h3>
        </div>
        <div className="flex justify-between p-4">
          <Input
            inputOne={inputOne}
            inputTwo={inputTwo}
            inputThree={inputThree}
            handleInputOneChange={handleInputOneChange}
            handleInputTwoChange={handleInputTwoChange}
            handleInputThreeChange={handleInputThreeChange}
          />
          <Display
            inputOne={inputOne}
            inputTwo={inputTwo}
            inputThree={inputThree}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
