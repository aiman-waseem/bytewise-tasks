import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './componentA'

const FirstName = createContext();
const lastName = createContext();

function App() {
 

  return (
    <>
    <FirstName.Provider value={"Aiman"}>
      <lastName.Provider value={"Waseem"}>
        <Component/>
      </lastName.Provider>
    </FirstName.Provider>

    </>
  )
}

export default App
export {FirstName,lastName};
