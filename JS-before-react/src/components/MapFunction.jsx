import React from 'react'
import Sets from './Sets'

// map loops through an array and does some kind 

export const MapFunction = ({StudentData}) => {

    const object =[
        {
            name:'uzma',
            car: 'corolla',
            age:40
        },
        {
            name:'aiman',
            car:'mercedes',
            age:22
        },
        {
            name:'ahsan',
            car:'Ferrari',
            age:20
        },
        {
            name:'aiman',
            car:'mercedes',
            age:22
        }
    ]

  return (
    
     object.length ? object.filter(person => person.age>20).map((person,i) =>(
    <div key={i} > <h2> Using map and filter function </h2> {person.name +" "+ person.car +" "+ i}
     </div>
    
   ))
   : <h3>No people</h3>
   
  )
  
  
  
}

