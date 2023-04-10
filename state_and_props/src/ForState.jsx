import { useState } from "react";

export default function ForState(){
    const[count, setcounter] = useState(0)
    const buttonStyle={
        border:'3px solid black',
        backgroundColor: "DodgerBlue"
    };
    function updatecount(){
        setcounter(count+1)
    }
return(
<>
    <h2>Using usestate()</h2>
    <div style={{border:'5px solid blue', margin:'10px', padding:'15px' }}>
    <h3>Button Clicked {count} times</h3>
    <button style={buttonStyle} onClick={updatecount} >Button</button>
    </div>
</>
)
}
