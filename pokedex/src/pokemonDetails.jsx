import React from 'react';
import style2 from './pokemonDetails.module.css'

function PokemonDetails({ pokemon }) {
  if (!pokemon) {
    return <div>No Pokémon selected.</div>;
  }

  return (
    <div className={style2.container}>
      <h2>{pokemon.name}</h2>
      <img className={style2.pokemonImage} src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h3>Types:</h3>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.slot}>{type.type.name}</li>
        ))}
      </ul>

      <h3>Abilities:</h3>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.slot}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;
