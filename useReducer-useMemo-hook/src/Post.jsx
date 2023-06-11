import { useReducer,useState } from "react"
import { INITIAL_STATE,Reducer } from "./Reducer"
import { ACTION_TYPES } from "./ActionTypes"

export const Post = ()=>{
    const[state,dispatch] = useReducer(Reducer,INITIAL_STATE)

    const handleFetch = () =>{
        // dispatch({type:"FETCH_START"})
        dispatch({type: ACTION_TYPES.FETCH_START})
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
            return res.json();
            
        })
        .then((data)=>{
        //   dispatch({type:"FETCH_SUCCESS", payload:data})
        dispatch({type:ACTION_TYPES.FETCH_SUCCESS, payload:data})
        })
        .catch((err)=>{
            // dispatch({type:"FETCH_ERROR"})
            dispatch({type:ACTION_TYPES.FETCH_ERROR})
        });
    };
    return(
        <div>
            <button onClick={handleFetch}>{state.loading?"Loading Data...":"Fetch the post.."}</button>
            <p>{state.post?.title} </p>
            <span> {state.error && "Something went wrong!!"} </span>
        </div>
      
    )
}