import React from 'react'



export const PrimaryComponent = ({StudentName, course, Grade}) => {
  // Arrow functions
    let sum = (x,y) => x+y
   console.log(sum(2,2))
  return (
    <div>
      <div>PrimaryComponent
         <p> {sum(5,3)} </p>
    </div>
    <p> {Grade},{StudentName}, {course} </p>
    </div>
   
  )
}
