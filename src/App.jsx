import { useEffect, useState } from 'react'

import './App.css'
import Auth from './components/auth'
import { db, storage } from './config/firebase'
import { getDocs, collection, addDoc, deleteDoc,doc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'


function App() {
  const [movieList, setMovieList] = useState([]) //state to keep track of list of movies.
 
  //New Movie states
  const[newMovieTitle, setNewMovieTitle] = useState("")
  const [newReleaseDate, setNewReleaseDate] = useState(0)
  const [isNewMovieOscar, setNewMovieOscar] = useState(false)

  //update Title States
  const[updatedTitle, setUpdatedTitle] = useState('')

  //file upload
  const[fileupload, setFileUpload] = useState()


   const moviesCollectionRef = collection(db,"movies")

   const getMovieList =async () => {
    try{
     const data = await getDocs(moviesCollectionRef)
     const filteredData = data.docs.map((doc)=>({
       ...doc.data(), 
       id: doc.id,
     }))
     setMovieList(filteredData)  //To display data on screen, put it in state variable
     
     console.log( "filtered data is", filteredData)
    } catch(err){
     console.error(err)
    }
   }

   const deleteMovie = async(id)=>{
    const movieDoc = doc(db,"movies", id); // first we call func 'doc'. Inside doc we pass arguments
    // doc(database_name, collection_name_from_database, id of the movie we want to delete)
    await deleteDoc(movieDoc)
   }

   const updateMovieTitle = async(id) =>{
    const movieDoc = doc(db,"movies", id);
    await updateDoc(movieDoc,{title: updatedTitle} )
  }  
 

  
  const onSubmitMovie = async () =>{
    try{
      await addDoc(moviesCollectionRef, {
        title:newMovieTitle,
        releaseDate:newReleaseDate,
        receivedAnOscar:isNewMovieOscar})
            
        getMovieList()

    }catch(err){
      console.error(err)
    }
    
  } 
  
  //This function getMoviesList will run immediately when we get into website, for this we use useEffect Hook.
  //useEffect will run when the component is rendered.
  useEffect(()=>{
    getMovieList();
  },[onSubmitMovie])

  const uploadFile = async () =>{
    if (!fileupload) return;   // if no file upload return nothing

    // if file upload make a reference to storage system
    const fileUploadRef = ref(storage,`projectFiles/${fileupload.name} `)  //in ref function give storage variable and path where we want to store files.
    try{
      await uploadBytes(fileUploadRef, fileupload)  //uploadBytes(jis folder me upload kr rhe hain uska reference, file we want to upload)
    } catch (err){
      console.error(err)
    }
  }

  

  return (
      <>
      <div className='App'> firebase app   
      <Auth/>
      <div>
        <input type="text" placeholder='Movie Title' name="" id="" onChange={(e)=> setNewMovieTitle(e.target.value)}/>
        <input type="number" placeholder='ReleaseDate' name="" id="" onChange={(e)=> setNewReleaseDate(Number(e.target.value))} />
        <input type="checkbox" name="" id="" checked={isNewMovieOscar} onChange={(e)=> setNewMovieOscar(e.target.checked)} />
        {/* checked={isNewMovieOscar}---> value would match whatever the value of state has */}
        <label htmlFor="">received Oscar?</label>
        <button onClick={onSubmitMovie}>submit</button>
      </div>
      <div>
        {movieList.map( (movie) => (
        
            <div key={movie.id}>
              <h1 style={{color:movie.receivedAnOscar ? "green" : "red"}}>{movie.title}</h1>
              <p>Date: {movie.releaseDate} </p>
              <button onClick={()=>deleteMovie(movie.id)}> Delete Movie </button>
              <input type="text"  placeholder='update movie title' onChange={(e)=>{setUpdatedTitle(e.target.value)}} />
              <button onClick={()=> updateMovieTitle(movie.id)}>update</button>

          </div>
         ))}
      </div>

      <div>
        <input type="file" name="" id="" onChange={(e)=> setFileUpload(e.target.files[0] )} />
        <button onClick={uploadFile}>Upload files</button>
      </div>
      </div>
      </>
   
  )
}

export default App
