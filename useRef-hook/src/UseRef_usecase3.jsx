import React,{useState, useEffect, useRef} from 'react'

function UseRef_usecase3() {
    const [name, setName]= useState('')
    const prevName = useRef('')

    useEffect(() => {
        prevName.current= name
    },[name]) //it will run every time on name changes

    return (
        <>
        <h3>Usecase 3</h3><p style={{fontStyle:"italic", textDecoration:"underline"}}>store previous value of state</p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <div>Current input is {name} and previous input is {prevName.current} </div>
        </>
    )
}

export default UseRef_usecase3
