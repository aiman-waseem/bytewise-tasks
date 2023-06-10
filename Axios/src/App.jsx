import { useState } from 'react'
import AxiosGet from './AxiosGet'

import AxiosPost from './AxiosPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AxiosGet/>
    <AxiosPost/>
      
      
    </>
  )
}

export default App
