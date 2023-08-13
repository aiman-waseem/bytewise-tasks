import React from 'react'


export const TernaryOperator = () => {

    // if(num<5){
    //     return true;
    // } else{
    //     return false
    // }
    let flag = false;
    let num = 3;
   
    (num < 5) ? console.log("true") : console.log("false");
    (num<5) ?? true; //if num is less than 5 its true(there is no else)
    console.log(num)


  return (
    <div>
      <h2> Using Ternary operators </h2>
       {num}
     </div>
  )
}
