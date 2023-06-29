'use client'
import Image from 'next/image'
import formImage from '../image/bookImage.jpg'
import { useFormik } from 'formik'
import * as Yup from "yup";
// import { useRouter } from 'next/router';


//npm i formik yup;----> write this in terminal to install formik and yup library

// Yup is used for form validation
// formik is a react library used to manage states in forms instead of useState() but we can do that with useState also

export default function Home() {
//Router (redirecting user to new page)
//  const router = useRouter();

  //formik logics
  const formik = useFormik({
    initialValues:{
      name:'',
    email:'',
    country:'United Kingdom',
    terms:'',
    },

    //Validate Form;
    validationSchema: Yup.object({
      name:Yup.string().max(20,"max letters should be 20").required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email field is empty"),
      terms: Yup.array().required("Terms of service must be checked")
    }),
    // submit form
    onSubmit: (values) => {
      console.log(values);
      // router.push({
      //   pathname: '/app/Success',
      //   query: values
      // });
    }
    

  });
  console.log(formik.values)
  console.log(formik.errors)
  return (
    <main className=" h-screen flex items-center justify-center">
     
     <form onSubmit={formik.handleSubmit} className='bg-white flex rounded-lg w-1/2 '>
      <div className='text-gray-700 p-20 flex-1'>
        <h1 className='text-3xl pb-2 '>Lets Get Started</h1>
        <p className='text-lg text-gray-500'> Hello Fellows!! join our platform </p>
        <div className='mt-6' >
       {/* name input field */}
       <div className='pb-4'>
        <label className='block text-sm pb-2 ' htmlFor='name'> Name: </label>
        <input className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500' type='text'  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}  name='name'placeholder='Enter your Name'></input>
        <label className='block text-sm pb-2 text-red-700 ' htmlFor='name'> {formik.touched.name && formik.errors.name ? formik.errors.name : ""} </label>
      </div>
      
      {/* email input field */}
      <div className='pb-4'>
        <label className='block text-sm pb-2 ' htmlFor='email'>Email: </label>
        <input className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500' value={ formik.touched.email && formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  type='email' name='email'placeholder='Enter your Email'></input>
        <label className='block text-sm pb-2 text-red-700 ' htmlFor='name'> {formik.touched.email && formik.errors.email ? formik.errors.email : ""} </label>
      </div>

      {/* country input field */}
      <div className='pb-4'>
        <label className='block text-sm pb-2 ' htmlFor='country'>Country: </label>
        <select 
        name='country' 
        className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500' 
        value={formik.values.country} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        placeholder='Enter your country'>

          <option>United States</option>
          <option>united kingdom</option>
          <option>london</option>
          <option>Australia</option>
          <option>Germany</option>
        </select>
      </div>

      {/* terms input field */}
      <div className='pb-4'>
        <label className='block text-sm pb-2 ' htmlFor='terms'>  </label>
        <label className='block text-sm pb-2 text-red-700 '>{formik.touched.terms && formik.errors.terms ? formik.errors.terms:""} </label>
      </div>
      <div className='flex items-center gap-2'>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} className='h-5 w-5 text-teal-500 border-2 focus:border-teal-950' type='checkbox' name='terms' value='checked' ></input>
        <p className='text-sm text-gray-500 font-latoBold'>I agree to the Terms and Service </p>
      </div>
       </div>
       <button type='submit' className='bg-teal-500 rounded-lg font-latoBold text-white text-sm mt-6 w-full p-2'>Start Learning Today!!</button>
      </div>
      <div className=' relative flex-1'>
        <Image src={formImage}  alt='book image'fill priority  className='object-cover rounded-lg'/>
      </div>
     </form>
    </main>
  )
}
