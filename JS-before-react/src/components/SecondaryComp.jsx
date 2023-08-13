import React from 'react'
import { getLength } from './NamedExports'
import { capitalize } from './NamedExports'

export const SecondaryComp = () => {

    const Person ={
        name:'aiman',
        age:20,
        occupation: 'software engineer',
    }
    // name = person.name
    // destructuring object
    let {name, age, occupation}=Person //destructuring or taking out values from person's object
    console.log("persons name is", name)
    console.log("persons occu is",occupation )

    
    const vehicles =['alto','corolla','mercedes']
    const car=vehicles[0]  //getting values from array (this is how things done in before destructuring concept)
    const truck = vehicles[1]

    //destructuring array
    const [smallcar, bigcar, biggercar] = vehicles
    console.log("biggercar is", biggercar); //mercedes

  return (
    <div>SecondaryComp
        <p> {getLength("aiman")} </p>
        <p> {capitalize("aiman")} </p>
        <h2> Practicing destructuring Concepts </h2>
        <p> person name is {name}, She is {age} years old, and her occupation is {occupation} </p>
    </div>
  )
}
