import React from 'react'
import './FormInput.css'
import { useState } from 'react'


function FormInput(props) {
    const [focused, setFocused] = useState(false)
    const{label,placeholder,errorMessage,values,onChange,id,...inputProps} = props

    const handleFocus = (e) => {
        setFocused(true)
     }; 

    return (
        <div className='formInput' >
        {/* <input type="text" name={props.name} id=""  
        placeholder={props.placeholder} */}
         {/* onChange={(e)=> props.setInput(e.target.value)}
         refer={props.userRefInput} */}

        
        
      <label> {label} </label>
      <input {...inputProps} onChange={onChange} 
      onFocus={inputProps.name==="confirm password" && setFocused(true)}
      onBlur={handleFocus} 
      focused={focused.toString()} />
      <span > {errorMessage} </span>
        
    
        </div>
    )
}

export default FormInput
