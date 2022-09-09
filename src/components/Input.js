import React, { useState } from "react";

function Input() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");

  function handleInputOneChange(e) {
    const re = /^[A-Za-z]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setInputOne(e.target.value);
    }
  }

  function handleInputTwoChange(e) {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setInputTwo(e.target.value);
    }
  }

  function handleInputThreeChange(e) {
    const re = /^[A-Za-z]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setInputThree(e.target.value);
    }
  }

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
