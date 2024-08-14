import Navbar from "./Navbar"
import RecipeCard from "./RecipeCard"
function FavouritesPage() {
  return (
    <div className="recipes-page">
        <Navbar/>
        <h2>Favourites</h2>
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

export default FavouritesPage