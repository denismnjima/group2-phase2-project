import FeaturedRecipe from "./FeaturedRecipe"
import RecipeCard from "./RecipeCard"
function RecipesContainer() {
  return (
    <div>
      <FeaturedRecipe/>
      <h2 id="pointer">Latest Recipe</h2>
      <div className="recipesContainer">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
      </div>
    </div>
  )
}

export default RecipesContainer