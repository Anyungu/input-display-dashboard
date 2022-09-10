import React from "react";

function Input({inputOne, inputTwo, inputThree, handleInputOneChange, handleInputTwoChange, handleInputThreeChange}) {

  // Inputs
  return (
    <div className="m-4 mt-10 ml-10">
      <div>
        <input
          type="text"
          className="border-2 border-blue-400 rounded-lg h-12 mb-10 outline-blue-600"
          value={inputOne}
          onChange={handleInputOneChange}
        />
      </div>

      <div>
        <input
          type="text"
          className="border-2 border-blue-400 rounded-lg h-12 mb-10 outline-blue-600"
          value={inputTwo}
          onChange={handleInputTwoChange}
        />
      </div>

      <div>
        <input
          type="text"
          className="border-2 border-blue-400 rounded-lg h-12 outline-blue-600"
          value={inputThree}
          onChange={handleInputThreeChange}
        />
      </div>
    </div>
  );
}

export default Input;
