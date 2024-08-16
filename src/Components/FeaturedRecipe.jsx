import pasta from "../assets/pasta.jpg"
import { useRecipe } from "../Hooks/recipeStore"
import { useCurrentRecipe } from "../Hooks/currentRecipeStore"
import parse from 'html-react-parser'
import { useNavigate } from "react-router-dom"
function FeaturedRecipe() {
  const navigate = useNavigate()
  const {random, setRandom} = useRecipe((state)=>({
    random:state.random,
  }))
  const {currentRecipe,setCurrentRecipe} = useCurrentRecipe((state)=>({
    currentRecipe:state.currentRecipe,
    setCurrentRecipe:state.setCurrentRecipe
  }))

  const goToViewFeatured=()=>{
    setCurrentRecipe(random)
    console.log(currentRecipe)
    navigate('/view')

  }
  return (
    random.length===0?'':
    <div className="featuredRecipe">
      <img src={random[0].image}/>
      <div className="featured-recipe-content">
        <h2>{random[0].title}</h2>
        <p>{parse(random[0].summary)}</p>
        <button 
          className="featured-button"
          onClick={goToViewFeatured}
        >View REcipe</button>
      </div>

  </div>
  )
}

export default FeaturedRecipe