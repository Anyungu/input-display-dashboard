import React from "react";

function Display({inputOne, inputTwo, inputThree}) {

  // Reverse the inputs
  function reverseInput(str){  
    let reversed = "";      
     for (let i = str.length - 1; i >= 0; i--){         
       reversed += str[i];  
     }     
    return reversed;
  }

  // Display the inputs as they change
  return (
    <div className="mr-10">
      <div className="border-2 border-emerald-400 rounded-lg bg-white m-4 h-20 w-44">{reverseInput(inputThree)}</div>
      <div className="border-2 border-emerald-400 rounded-lg bg-white m-4 h-20 w-44">{reverseInput(inputTwo)}</div>
      <div className="border-2 border-emerald-400 rounded-lg bg-white m-4 h-20 w-44">{reverseInput(inputOne)}</div>
    </div>
  );
}

export default Display;
