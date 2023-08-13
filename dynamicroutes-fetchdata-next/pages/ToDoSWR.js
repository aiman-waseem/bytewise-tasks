import useSWR from 'swr';
import { ImCheckboxChecked } from 'react-icons/im';


// Define a function to fetch your data
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    return data;
};

export default function YourComponent() {
    // Use the useSWR hook to fetch and manage data
    const { data, error } = useSWR('unique-key', fetchData);

    // Handle loading and errors
    if (error) return <div>An error occurred: {error.message}</div>;
    if (!data) return <div>Loading...</div>;

    // Render your data
    return (
        <ul>
            <h1> Data fetching using SWR </h1>
            <h2> TodoList-SWR </h2>
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
    );
}
