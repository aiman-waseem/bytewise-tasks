import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useToggle } from './useToggle'

//custom hooks also use to abstract login like api call

function App() {
  // useState(false)
  //const [isVisible, setisVisible] = useToggle() 
  
  const[isVisible, toggle ]=useToggle()
  const[isVisible2, toggle2] =useToggle()

  // function handleClick(){
  //   console.log(isVisible)
  //   setisVisible(!isVisible);
  // }
  


  return (
    <>
      <button type="button" onClick= {toggle}>{isVisible? "Hide":"Show"}</button>
      {isVisible && <h1>Showing  Text</h1> }
      <button type="button" onClick= {toggle2}>{isVisible2? "Hide":"Show"}</button>
      {isVisible2 && <h1>Showing  Text 2</h1> }
    </>
  )
}

export default App
