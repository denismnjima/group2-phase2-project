const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL =`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=26`
const searchEndpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`

export const fetchRandom = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error('Failed to fetch random recipes');
      const data = await response.json();
      return data.recipes || [];  // Adjust based on the actual structure
    } catch (error) {
      console.error('Error in fetchRandom:', error);
      return [];  // Handle errors appropriately
    }
  };

  export const fetchSearch = async (query) => {
    try {
      const response = await fetch(`${searchEndpoint}&includeIngredients=${query}`);
      if (!response.ok) throw new Error('Failed to fetch random recipes');
      const data = await response.json();
      return data.results || [];  // Adjust based on the actual structure
    } catch (error) {
      console.error('Error in fetchRandom:', error);
      return [];  // Handle errors appropriately
    }
  };

  export const fetchSingle = async (id) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
      if (!response.ok) throw new Error('Failed to fetch random recipes');
      const data = await response.json();
      console.log(data)
      return data.results || [];  // Adjust based on the actual structure
    } catch (error) {
      console.error('Error in fetchRandom:', error);
      return [];  // Handle errors appropriately
    }
  };