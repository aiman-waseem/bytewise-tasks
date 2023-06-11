import React, { useReducer, useRef } from 'react'
import { FormReducer,INITIAL_STATE } from './FormReducer'

function Form() {
    const [state, dispatch] = useReducer(FormReducer,INITIAL_STATE)
    const tagRef = useRef() //to reach to the value and get the value inside text area

    const handleChange=(e)=>{
        dispatch({type:"CHANGE_INPUT", payload:{name:e.target.name, value: e.target.value}})
    }
    console.log(state)

    const handletags =()=>{
        //take string, make it array and separate all elements using commas inside text area
        const tags = tagRef.current.value.split(",")
        tags.forEach(tag=>{
            dispatch({type:"ADD_TAG", payload: tag}) // in this case it will send 1, after that 2, after that 3
        })
    }

    return (
        <>
        <form action="">
         <input type="text" placeholder='title' name='title' onChange={handleChange}/>
         <input type="text" placeholder='Desc' name='desc' onChange={handleChange}/>
         <input type="number" name="price" id="" placeholder='Price' onChange={handleChange} />

         <p>Category:</p>
         <select name="category" id="" onChange={handleChange}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
         </select>

         <p>Tags:</p>

         <textarea ref={tagRef} name="" id="" cols="30" rows="5" placeholder='separate tags with commas...'></textarea>
         <button onClick={handletags} type='button'>Add Tags</button>
         <div className="tags">
            {state.tags.map((tag)=>(
                <small onClick={()=>dispatch({type:"REMOVE_TAG",payload:tag })} //reducer takes this tag and filters this array
                key={tag}>
                    {tag}
                </small>
            ))}
         </div>
         <div className="quantity">
            <button type="button" onClick={()=>dispatch({type:"DECREASE"})}>
                -
            </button>
            <span>Quantity {state.quantity} </span>
            <button type="button" onClick={()=>dispatch({type:"INCREASE"})}>
                +
            </button>
         </div>


        </form>
        </>
    )
}

export default Form
