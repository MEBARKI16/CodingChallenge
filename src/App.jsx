import React, { useState, useEffect } from 'react';
import PokemonTable from './components/PokemonTable/PokemonTable';
import Filter from './components/Filter/Filter';
import { fetchPokemonData } from './services/pokemonService';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [powerThreshold, setPowerThreshold] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData();
      setPokemonData(data.map(pokemon => ({
        ...pokemon,
        power: calculatePower(pokemon)
      })));
    };

    fetchData();
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handlePowerThresholdChange = (threshold) => {
    setPowerThreshold(Number(threshold));
  };

  const filteredData = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm) &&
    pokemon.power >= powerThreshold
  );
  const minPower = Math.min(...filteredData.map(p => p.power));
  const maxPower = Math.max(...filteredData.map(p => p.power));

  return (
    <div className="App">
      <Filter
        onSearchChange={handleSearchChange}
        onPowerThresholdChange={handlePowerThresholdChange}
        minPower={minPower || 0}
        maxPower={maxPower || 0}
      />

      <PokemonTable data={filteredData} />
    </div>
  );
};

const calculatePower = (pokemon) => {
  return pokemon.hp + pokemon.attack + pokemon.defense +
    pokemon.special_attack + pokemon.special_defense + pokemon.speed;
};

export default App;
