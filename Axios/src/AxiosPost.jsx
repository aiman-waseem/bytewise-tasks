import axios from 'axios';
import React, { useState } from 'react'
import './App.css'

function AxiosPost() {
    const data = {fname: "", lastname: ""};
    const [inputData, setInputData] = useState(data)

    const handleData = (e)=>{
        // e.target.name is key in which it set e.target.value
        setInputData({...inputData, [e.target.name]:e.target.value})  
    }
    const handleSubmit = (e)=>{
        e.preventDefault(); //to stop loading page i.e, default behaviour
        axios.post("https://jsonplaceholder.typicode.com/users", inputData) //1st parameter (api), 2nd parameter(jis data ko post krwana hai wo 'inputdata' me store hai)
        .then((response)=>{
            console.log(response)
        })
    }

        const handleUpdate = (e)=>{
        e.preventDefault(); //to stop loading page i.e, default behaviour
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData) //1st parameter (api), 2nd parameter(jis data ko post krwana hai wo 'inputdata' me store hai)
        .then((response)=>{
            console.log(response)
        })
    }
    
    const handleDelete = ()=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })
    }

    return (
        <>
        {/* creating form */}
        <h2>update and delete form data using axios.PUT , axios.delete respectively</h2>
        <div className='container'>
        <label htmlFor=""><h3>First Name:</h3></label>
        <input type="text" name="fname" id="" value={inputData.fname} onChange={handleData} />
        <label htmlFor=""><h3>Last Name:</h3></label>
        <input type="text" name="lastname" id="" value={inputData.lastname} onChange={handleData} />
        </div>

        <div className="buttons">
        <button onClick={handleSubmit}>Submit</button>
        {/* updating data using PUT  */}
        <button onClick={handleUpdate}>Update</button>  
        <button onClick={handleDelete}>Delete</button>
        </div>
        
        
        </>
    )
}

export default AxiosPost
