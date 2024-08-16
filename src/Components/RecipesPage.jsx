import Navbar from "./Navbar"
import RecipeCard from "./RecipeCard"
import { useRecipe } from "../Hooks/recipeStore"
function RecipesPage() {
  const recipe = useRecipe((state)=>state.random)
  return (
    <div className="recipes-page">
        <h2>Recipes</h2>
        <div className="recipesContainer">
        {recipe.length===0?'':recipe.map((single)=>{
          return(<RecipeCard recipe={single} key={single.id}/>)
        })}
        </div>
    </div>
  )
}

export default RecipesPage