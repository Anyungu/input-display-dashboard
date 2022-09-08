import React, { useState } from "react";

function Input() {

  const [inputOne, setInputOne] = useState("")
  const [inputTwo, setInputTwo] = useState("")
  const [inputThree, setInputThree] = useState("")

  function handleInputOneChange(e) {
    setInputOne(e.target.value)
  }

  function handleInputTwoChange(e) {
    setInputTwo(e.target.value)
  }

  function handleInputThreeChange(e) {
    setInputThree(e.target.value)
  }

  return (
    <div>
      <div>
        <input 
        onkeydown="return /[a-z]/i.test(event.key)"
        className="border-2"
        value={inputOne}
        onChange={handleInputOneChange}
        />
      </div>

      <div>
        <input 
        className="border-2"
        value={inputTwo}
        onChange={handleInputTwoChange}
        />
      </div>

      <div>
        <input 
        className="border-2"
        onkeydown="return /[a-z]/i.test(event.key)"
        value={inputThree}
        onChange={handleInputThreeChange}
        />
      </div>

    </div>
  )
}

export default Input;