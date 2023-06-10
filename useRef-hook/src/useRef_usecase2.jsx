import React, {useState, useEffect, useRef} from 'react'

function UseRef_usecase2() {
    const [name,setName] = useState();
    const inputRef = useRef()

    function focus(){
        inputRef.current.focus()
    }

    return (
        <>
        <h3 style={{marginBottom: "0px"}}>usecase2:</h3><p style={{fontStyle:"italic", textDecoration:"underline"}}>Reference of elements inside html</p>
        <p>it will focus input bar onclicking focus button</p>
       <input style={{ padding:"10px"}} ref={inputRef} type="text" name="" id="" value={name} onChange={e => setName(e.target.value)} />
       <div>my name is {name} </div>
       <button style={{border: "3px solid black"}} onClick={focus}>Focus</button>
        </>
    )
}

export default UseRef_usecase2
