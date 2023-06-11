import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './ComponentsFolder/component1'
import Component2 from './ComponentsFolder/component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CSS Module</h1>
      <Component1/>
      <Component2/>
    </>
  )
}

export default App
