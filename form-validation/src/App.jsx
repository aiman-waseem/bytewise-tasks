import { useState, useRef } from 'react'
import './App.css'
import FormInput from './components/FormInput'
import './components/FormInput.css'

function App() {
 const [values,setValues]= useState({
  Username:"",
  email:"",
  dob:"",
  errorMessage:"",
  password:""
 })

 const Inputs = [{
  id:1,
  name:"Username",
  type: "text",
  placeholder: "username",
  errorMessage:"Name should be 3-16 charcters and should not include any special character",
  label: "username",
  pattern: "^[A-Za-z0-9]{3,16}$",
  required: true,
 },
 {
  id:2,
  name:"email",
  type: "email",
  placeholder: "email",
  errorMessage:"invalid email address",
  label: "Email:",
  required: true,
 },
 {
  id:3,
  name:"dob",
  type: "date",
  placeholder: "Date of Birth",
  label: "Date of Birth:"
 },
 {
  id:4,
  name:"password",
  type: "password",
  placeholder: "Password",
  errorMessage:"password should be 8-20 characters and include atleast 1 number, 1 letter, 1 special character",
  label: "Password:",
  pattern:"^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,20}$",
  required: true,
 },
 {
  id:5,
  name:"confirmPassword",
  type: "text",
  placeholder: "Confirm Password",
  errorMessage:"password dont match",
  label: "Confirm Password:",
  pattern: values.password,
  required: true,
 }
]
  
 // console.log("input is", Input);  it re renders every time we input

// To prevent re-rendering we use useRef hooks 
 const userRefInput = useRef();


const handleSubmit = (e)=>{
  e.preventDefault()
  
  // console.log("ref", userRefInput)

  //creating FormData object
  // const data = new FormData(e.target);
  // console.log(Object.fromEntries(data.entries()))
}

const onChange =(e)=>{
  setValues({...values, [e.target.name]: e.target.value})
  
}
console.log(values)
  
  return (
    <div className='app' >
    <form action="" onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
    {/* <FormInput name="Username" placeholder="name"  refer={userRefInput} />
    <FormInput name='email' placeholder="email" />
    <FormInput name="dob" placeholder="date of birth" />
    <FormInput name = "password" placeholder="password" />
    <FormInput name = "confirmPassword" placeholder="confirmPassword" /> */}
    {Inputs.map((input)=>(
      <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
    ))}
    <button className='submit'>Submit</button>
    </form>
    </div>
  )
}

export default App
