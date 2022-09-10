import React from "react";

function Display({inputOne, inputTwo, inputThree}) {

  function reverseInputOne(inputOne){  
    let reversed = "";      
     for (let i = inputOne.length - 1; i >= 0; i--){         
       reversed += inputOne[i];  
     }     
    return reversed;
  }

  function reverseInputTwo(inputOne){  
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
      <div className="border-2 border-black rounded-lg m-4 h-20 w-44">{reverseInputTwo(inputTwo)}</div>
      <div className="border-2 border-black rounded-lg m-4 h-20 w-44">{reverseInputOne(inputOne)}</div>
    </div>
  );
}

export default Display;
