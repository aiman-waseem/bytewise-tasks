import { useState } from 'react'
import './App.css'
import ForProps from './ForProps';
import ForState from './ForState';

function App() {
  return (
    <div>
      <ForProps name='Aiman'  fellowshipName='Bytewise fellowship'/>
      <ForState/>
      
    </div>
  )
}

export default App;
