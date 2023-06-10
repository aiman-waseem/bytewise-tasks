import React,{useState,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRef_usecase2 from './useRef_usecase2'
import UseRef_usecase3 from './UseRef_usecase3'


function App() {
  const [name,setName] = useState('')
      const renderCount = useRef(0)

      useEffect(() => {
        renderCount.current = renderCount.current + 1
      })

  return (
    <>
     <h1>UseRef() hook</h1>
      <h3>Usecase1</h3><p style={{fontStyle:"italic", textDecoration:"underline"}}>For rendering purpose</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times </div>
      <UseRef_usecase2/>
      <UseRef_usecase3/>
    </>
  )
}

export default App
