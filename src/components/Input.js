import React from "react";

function Input({inputOne, inputTwo, inputThree, handleInputOneChange, handleInputTwoChange, handleInputThreeChange}) {


  return (
    <div className="m-4 mt-12 ml-10">
      <div>
        <input
          type="text"
          className="border-2 border-black h-10 mb-12"
          value={inputOne}
          onChange={handleInputOneChange}
        />
      </div>

      <div>
        <input
          type="text"
          className="border-2 border-black h-10 mb-12"
          value={inputTwo}
          onChange={handleInputTwoChange}
        />
      </div>

      <div>
        <input
          type="text"
          className="border-2 border-black h-10"
          value={inputThree}
          onChange={handleInputThreeChange}
        />
      </div>
    </div>
  );
}

export default Input;
