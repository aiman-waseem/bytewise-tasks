// Sets --> collection of items that are unique(no duplicates)

import React, { useEffect } from 'react'

export default function Sets ()  {
    const object =[
        {
            name:'uzma',
            car: 'corolla',
            age:40,
            occupation: 'Doctor'
        },
        {
            name:'aiman',
            car:'mercedes',
            age:22,
            occupation: 'AI Software Engineer'
        },
        {
            name:'ahsan',
            car:'Ferrari',
            age:20,
            occupation: 'Business man/Head of company'
        },
        {
            name:'aiman',
            car:'mercedes',
            age:22,
            occupation: 'AI Software Engineer'
        },
        {
            name:'uzma',
            car: 'corolla',
            age:40,
            occupation: 'Doctor'
        }
    ]
 
console.log(object[0].name)

const getOccupations = () =>{
    const occupations = []
    object.map((person) =>{
       occupations.push(person.occupation)
    })
    console.log(`Occupations: ${[...new Set(occupations)]} `) //put spread operator to display is it in array form
}

useEffect(()=>{
   getOccupations(); 
},[])
  return (
    <div>
    <p>
     {getOccupations} 
    </p>
    </div>
  )
}
