import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonList from './pokemonList'
import  style1 from './pokemon.module.css'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPageUrl, setnextPageUrl] = useState()
  const [prevPageUrl, setprevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  const [] = useState()
useEffect(()=>{
  setLoading(true)
  axios.get(currentPageUrl)
  .then((response)=>{
    setnextPageUrl(response.data.next)
    setprevPageUrl(response.data.previous)
    setPokemon(response.data.results)
    console.log("pokemon data",pokemon.map(p => p.name))
    console.log("this is response", response.data.results.map( p => p.name))
    // response.data.results.map(p => p.name)
  })
},[currentPageUrl])

// if(loading) return "Loading..."

  function gotoNextPage (){
  setcurrentPageUrl(nextPageUrl)
}


  function gotoPrevPage (){
  setcurrentPageUrl(prevPageUrl)
}

  return (
    <>
     <PokemonList pokemon = {pokemon} />
     
     <div className={style1.PNbuttons}>
     <button type="button" className={style1.prevNextbutton} onClick={gotoPrevPage}>Previous</button>
     <button type="button" className={style1.prevNextbutton} onClick={gotoNextPage}>Next</button>
     </div>
    
    </>
  )
}

export default App
