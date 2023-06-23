import PokemonDetails from './pokemonDetails';
import React, { useState } from 'react';
import axios from 'axios';
import  style1 from './pokemon.module.css'
import {  motion } from 'framer-motion'

function PokemonList({ pokemon }) {
  const [input, setInput] = useState('')
  const [selectedCard, setSelectedCard] = useState('');
  const [error, setError] = useState(null);

  const handleCardClick = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setSelectedCard(response.data);
      console.log("selected card value",selectedCard.name)
     
      setError(null);
     
    } catch (error) {
      setSelectedCard(null);
      setError('Failed to fetch Pokémon details!');
      console.log(error);
    }
  };

  const handleInput = (e)=>{
    setInput(e.target.value)
    
  }

  const searchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
      setSelectedCard(response.data);
      setError(null);
    } catch (error) {
      setSelectedCard(null);
      setError('Pokémon not found!');
    }
  };

  // {selectedCard && (
  //   <div>
  //     <h2>{selectedCard.name}</h2>
  //     <img src={selectedCard.sprites.front_default} alt={selectedCard.name} />

  //     <h3>Types:</h3>
  //     <ul>
  //       {selectedCard.types.map((type) => (
  //         <li key={type.slot}>{type.type.name}</li>
  //       ))}
  //     </ul>

  //     <h3>Abilities:</h3>
  //     <ul>
  //       {selectedCard.abilities.map((ability) => (
  //         <li key={ability.slot}>{ability.ability.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )}

  const fadeLeft = {
    hidden : {opacity:0, x:-100},
    visible: {opacity:1, x:0}
}


  return (
    <div className={style1.container}>
    <div className="pokemondetails">
    <PokemonDetails pokemon={selectedCard}/>
    </div>
  
      <motion.img className={style1.logo} src="pokemonlogo.png" alt="pokemonlogo"
       initial= {{opacity:0}}
       animate = {{opacity:1}}
       transition={{duration:2}}
      />
      <div className={style1.searchbar}>
        <input type="text" name="" id="" value={input} onChange={handleInput}/>
        <button type="button" onClick={searchPokemon}>SEARCH POKEMON</button>
      </div>

      
      
      <div className={style1.pokemonList}>
      {pokemon.map((p) => (
        <div className={style1.card} style={{ cursor: 'pointer' }} key={p.name} onClick={() => handleCardClick(p.name)}>
          <motion.img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.indexOf(p) + 1}.png`} alt={p.name}
           variants={fadeLeft}
           initial='hidden'
           animate = 'visible'
           transition={{duration:1}}

          />
          <p>{p.name}</p>
        </div>
      ))}
      </div>
      
      

      {error && <div>{error}</div>}
    </div>
  );
}

export default PokemonList;
