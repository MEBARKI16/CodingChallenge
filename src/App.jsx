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
  const powers = filteredData.map(p => p.power);
  const minPower = powers.length > 0 ? Math.min(...powers) : 0;
  const maxPower = powers.length > 0 ? Math.max(...powers) : 0;


  return (
    <div className="flex flex-col gap-10 mt-5">
      <Filter
        onSearchChange={handleSearchChange}
        onPowerThresholdChange={handlePowerThresholdChange}
        minPower={minPower}
        maxPower={maxPower}
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
