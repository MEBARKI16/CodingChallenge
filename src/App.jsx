import React, { useState, useEffect } from 'react';
import PokemonTable from './components/PokemonTable';
import { fetchPokemonData } from './services/pokemonService';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData();
      setPokemonData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <PokemonTable data={pokemonData} />
    </div>
  );
};

export default App;
