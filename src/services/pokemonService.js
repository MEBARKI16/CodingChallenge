export const fetchPokemonData = async () => {
    try {
      const response = await fetch('/pokemon.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  