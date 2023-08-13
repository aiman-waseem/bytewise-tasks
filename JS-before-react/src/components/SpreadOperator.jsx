import React from 'react'
// spread operator--> use three dots, essentially spread array and do things like combine it or make a copy
// allows to spread out elements of an iterable object. such as an array
// also used for copying something like an array (array concatenating, inserting an array)

export const SpreadOperator = (props) => {
const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbersCombined = [...numbers1,...numbers2]
const addingNumbers = [11,12,13,...numbers2]
const copyOfNumbers2Array =[...numbers2]

const circle ={
    radius:10,
    style:{
        color:'blue'
    }
}

const clonedCircle={...circle}

console.log(clonedCircle)

  return (
    <div>
         <h2> Using spread operators </h2>
        Combined numbers of 2 arrays {numbersCombined}
        <p> ading more numbers{addingNumbers} </p>
        <p> make copy of array2 is {copyOfNumbers2Array} </p>
        {/* <p> {clonedCircle} </p> */}
        <p>
            {props.StudentData.studentName} 
        </p>
    </div>
  )
}
