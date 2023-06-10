import React, { useContext } from 'react'
import {FirstName, lastName} from "./App"
import ComponentC from './ComponentC'

function ComponentB() {
    const fname = useContext(FirstName)
    const lname = useContext(lastName)
    return (
        <>
        <h4>useContext hook to send data from parent component to child component</h4>
        <h2>my name {fname} {lname} </h2>
        <ComponentC/>
        </>
    )
}

export default ComponentB
