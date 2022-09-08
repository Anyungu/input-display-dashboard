import React, { useState } from "react";

function Input() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");

  function handleInputOneChange(e) {
    setInputOne(e.target.value);
  }

  function handleInputTwoChange(e) {    
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === '' || re.test(e.target.value)) {
       setInputTwo(e.target.value)
    }
  }

  function handleInputThreeChange(e) {
    setInputThree(e.target.value);
  }

  // function alphaOnly(event) {
  //   var key = event.keyCode;
  //   return ((key >= 65 && key <= 90) || key === 8);
  // };

  return (
    <div>
      <div>
        <input
          type="text"
          className="border-2"
          value={inputOne}
          onChange={handleInputOneChange}
        />
      </div>

      <div>
        <input
          type="text"
          className="border-2"
          value={inputTwo}
          onChange={handleInputTwoChange}
        />
      </div>

      <div>
        <input
          type="text"
          className="border-2"
          value={inputThree}
          onChange={handleInputThreeChange}
        />
      </div>
    </div>
  );
}

export default Input;
