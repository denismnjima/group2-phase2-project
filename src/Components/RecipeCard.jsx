import { useCurrentRecipe } from "../Hooks/currentRecipeStore"
import { useNavigate } from "react-router-dom"
function RecipeCard(props) {
  const {recipe} = props
  const setCurrentRecipe = useCurrentRecipe((state)=>state.setCurrentRecipe)
  const navigate = useNavigate()
  const goToViewRecipe=()=>{
    let data = []
    data.push(recipe)
    setCurrentRecipe(data)
    navigate('/view')

  }
  return (
    <div className="indRecipe" onClick={goToViewRecipe}>
      <img src={recipe.image} />
      <h3>{recipe.title}</h3>
      <hr />
      <span>{recipe.diets[0]==0?'':recipe.diets[0]}</span>
    </div>
  )
}

export default RecipeCard