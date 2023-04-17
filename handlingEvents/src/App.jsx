import { useState } from 'react'



function App() {
  const purple =  "#8a2be2";
  const [background,setBackground]=useState(purple);
  const[name,setName]=useState('Click to see Magic');

  const backgroundChange =()=>{
    const newBackgroundColor = 'yellow';
    setBackground(newBackgroundColor);
    setName('Clicked');
    console.log("clicked");
  }

  return (
    <div style={{backgroundColor:background}}>
      <h3>Handling Event Task <br /> by clicking on button it will change background color and button text</h3>
      <button onClick={backgroundChange}> {name} </button> 
      </div>
  )
}

export default App
