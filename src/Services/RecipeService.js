const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL =`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=26`

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