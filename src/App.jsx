import { fetchPokemonData } from './services/pokemonService';
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData();
      setPokemonData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {pokemonData.map(pokemon => (
        <div key={pokemon.id}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}

export default App;
