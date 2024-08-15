import FeaturedRecipe from "./FeaturedRecipe"
import RecipeCard from "./RecipeCard"
import { useRecipe } from "../Hooks/recipeStore"
function RecipesContainer() {
  const recipe = useRecipe((state)=>state.random)
  return (
    <div>
      <FeaturedRecipe/>
      <h2 id="pointer">Latest Recipe</h2>
      <div className="recipesContainer">
        {recipe.length===0?'':recipe.map((single)=>{
          return(<RecipeCard recipe={single} key={single.id}/>)
        })}
      </div>
    </div>
  )
}

export default RecipesContainer