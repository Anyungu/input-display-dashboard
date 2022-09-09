import React from "react";

function Display({inputOne, inputTwo, inputThree}) {
  return (
    <div className="mr-10">
      <div className="border-2 border-black rounded-lg m-4 h-20 w-44">{inputThree}</div>
      <div className="border-2 border-black rounded-lg m-4 h-20 w-44">{inputTwo}</div>
      <div className="border-2 border-black rounded-lg m-4 h-20 w-44">{inputOne}</div>
    </div>
  );
}

export default Display;
