import Navbar from "./Navbar"
import RecipeCard from "./RecipeCard"
function RecipesPage() {
  return (
    <div className="recipes-page">
        <Navbar/>
        <h2>Recipes</h2>
        <div className="recipesContainer">
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </div>
    </div>
  )
}

export default RecipesPage