import React from 'react'
import{ useState } from 'react'
import { useForm } from 'react-hook-form'
import './UserForm.css'

// npm install react-hook-form
// see documentation -- complete documentation available on reacthook website 


const onSubmit = (data) => console.log(data)

function UserForm() {
    const {register, handleSubmit, formState:{errors}} = useForm()

    
    return (
        <>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='form'>
        <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='First Name' />
            {errors.firstName && <p><strong>First Name is Required</strong></p>}
            <br />

            <input {...register("lastName", { required: true ,pattern: /^[A-Za-z]+$/i })} placeholder='LastName' />
            {errors.lastName && <p><strong>Last Name is Required</strong></p>}
            <br />

            <input {...register("email", {required: true, pattern:"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"})} type="text" placeholder='email' />
            {errors.email && <p><strong>Invalid email address</strong></p>}
            <br />
            <input {...register("age",{required: true ,pattern:/\d+/ } )} placeholder='Age' type='number'/>
            {errors.age && <p><strong>Age is required</strong></p>}
            <br />
            <input type="submit" name="" id="" />
        </form>
        </>
    )
}

export default UserForm


