import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function AxiosGet() {
    const[userData, setdata] = useState([])  // State variable to store user data
    useEffect(()=>{
        // getting data from API (calling GET request)
        axios.get("https://jsonplaceholder.typicode.com/users") 
        .then((response)=>{
            console.log(response)   // Logging the response data
            setdata(response.data)  // Updating the state with fetched user data
        })
      },[]) // Empty dependency array ensures the effect runs only once on component mount

    return (
       <div>
        <h2>Displaying data using axios.get from fake API</h2>
        {userData.map((data)=>{
            return(
                <div>{data.name}</div>   // Rendering each user's name
            )
        })}
       </div> 

          
    )
}

export default AxiosGet
