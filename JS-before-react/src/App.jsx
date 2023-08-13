import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimaryComponent } from './components/PrimaryComponent'
import { SecondaryComp } from './components/SecondaryComp'
import { SpreadOperator } from './components/SpreadOperator'
import { TernaryOperator } from './components/TernaryOperator'
import { MapFunction } from './components/MapFunction'
import Sets from './components/Sets'

function App() {
  
  const StudentData = {
    StudentName: 'Ahsan',
    course: 'Intermediate',
    Grade: 'A-one,'
  }

  return (
    <>
    <h1> Javascript Concepts before React </h1>
    <p style={{backgroundColor:'Purple', color:'white'}}>
      <strong>
      1) module.exports
      2) Ternary operators
      3) map()
      4) filter()
      5)Sets
      6) Destructuring
      7) Spread Operator
      8) Arrow Functions
      </strong>
    </p>
     <PrimaryComponent {...StudentData}/>
     <SecondaryComp  />
     <SpreadOperator StudentData={StudentData} />
     <TernaryOperator/>
     <MapFunction StudentData={StudentData} />
     <Sets/>
    </>
  )
}

export default App
