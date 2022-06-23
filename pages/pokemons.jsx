import { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemons = ({ pokemons }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  //   const [load, setLoad] = useState(
  //     'https://pokeapi.co/api/v2/pokemons?limit=20'
  //   );

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => {
        setAllPokemons(res.data.results);
      })
      .catch(err => err);
  }, [allPokemons]);
  return (
  <>
    {allPokemons.map(pokemon => {
      return( 
      <>
        <h1>{pokemon.name}</h1>
      </>
      )
    })}
  </>
  )
};

export default Pokemons;
