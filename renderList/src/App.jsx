import { useState } from 'react'
import { ArrayData } from './ArrayData' ;
import './App.css';


function App() {
   const helloo= ArrayData.filter(para => para.obtainedMarks>80).map(para => <li>name={para.name}</li>);
   
return (
    <>
    <h2>Render List through map() and filter() method. </h2>
    <h3>Render person's name whose obtained Marks is above 80 as a list</h3>
    <ul>{helloo}</ul>
    
    </>
  )
}

export default App
