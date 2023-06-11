import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Post } from './Post'
import Form from './FormFolder/Form'
import UseMemo_hook from './useMemo_hook'

function App() {
  

  return (
    <>
      <Post/>
      <Form/>
      <UseMemo_hook/>
    
    </>
  )
}

export default App
