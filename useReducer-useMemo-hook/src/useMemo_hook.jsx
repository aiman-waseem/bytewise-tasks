import React, { useMemo, useState } from 'react'

function UseMemo_hook() {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)

    const multiplication= useMemo(function multiply(){
        console.log("*****************************************************")
        return add*10;
    },[add])
    return (
       <>
       <h2>useMemo()</h2>
       {multiplication} <br />
       <button onClick={()=>setAdd(add+1)}>Addition</button>
       <span>{add}</span>
       <button onClick={()=>setMinus(minus-1)}>subtract</button>
       <span>{minus} </span>
       </> 
    )
}

export default UseMemo_hook
