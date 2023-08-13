// Client Side data fetching in next js(method1x)

import React, { useEffect, useState } from 'react'
import { ImCheckboxChecked } from 'react-icons/im';



export default function ToData() {
   const [data, setData] = useState([])
   const [IsLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => response.json())
  .then(data  => {
    console.log(data)

 

    setData(data)
    setIsLoading(false)
  })
  .catch(error => console.error('Error fetching data:', error));
  },[])
  if(IsLoading)  {
    return <p>Loading....</p>
}
if(!data) {
    return <p> No data to show.... </p>
}

  return (
    <>
     <h1>
        To Do list
     </h1>
     
     <ul>
        
        {data.map((todo)=>{
            return(
              <div key={todo.id} style={{margin:'20px', border: '5px solid gray', padding:'10px'}} > 
                <span >
                <h2> Title: {todo.title} </h2>
                 <span style={{color : todo.completed ? 'green': 'red', fontSize:'1.5rem'}}> {todo.completed ? 'Completed'  : 'NotCompleted'}
                 {todo.completed && <ImCheckboxChecked  style={{marginLeft:'15px',marginTop:'10px'}}/>}
                  </span>

                </span>
               </div>
            )
        })}
     </ul>
    </>
  )
}
