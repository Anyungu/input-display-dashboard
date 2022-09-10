import React from "react";

function Display({inputOne, inputTwo, inputThree}) {

  function reverseInput(inputOne){  
    let reversed = "";      
     for (let i = inputOne.length - 1; i >= 0; i--){         
       reversed += inputOne[i];  
     }     
    return reversed;
  }

  // Display the inputs as they change
  return (
    <div className="mr-10">
      <div className="border-2 border-black rounded-lg m-4 h-20 w-44">{inputThree}</div>
      <div className="border-2 border-black rounded-lg m-4 h-20 w-44">{inputTwo}</div>
      <div className="border-2 border-black rounded-lg m-4 h-20 w-44">{reverseInput(inputOne)}</div>
    </div>
  );
}

export default Display;
