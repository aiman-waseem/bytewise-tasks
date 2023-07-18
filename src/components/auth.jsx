import React, { useState } from 'react'
import {auth, googleProvider} from '../config/firebase';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

// auth ---> use for getting user that is currently siged in 

export default function Auth() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

      console.log(auth?.currentUser?.email)

    const signIn = async() =>{
    try{
        await createUserWithEmailAndPassword(auth, email,password)
       } catch(err) {
            console.error(err)
       }    
    }

    const signInWithGoogle = async() =>{

        try{
         await signInWithPopup(auth, googleProvider)
        } catch(err) {
             console.error(err)
        }    
     }

     const LogOut = async() =>{
        try{
            await signOut(auth)
           } catch(err) {
                console.error(err)
           }    
        } 
  return (
    <div>
        <input type="text" placeholder='Email' onChange={(e) => {setEmail(e.target.value)} }/>
        <input type='password'  placeholder='pasword' onChange={(e) => {setPassword(e.target.value)}}  />
        <button onClick={signIn}> Sign in </button>
        <button onClick={signInWithGoogle}> Sign in With Google </button>
        <button onClick={LogOut}> Log out </button>
    </div>
  )
}
