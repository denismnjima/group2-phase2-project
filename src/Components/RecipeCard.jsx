import image1 from "../assets/burger.jpg"
import * as Icon from 'react-bootstrap-icons'
function RecipeCard() {
  return (
    <div className="indRecipe">
      <img src={image1} />
      <h3>Rustic cheese and pepperoni pizza</h3>
      <hr />
      <span><Icon.Lightbulb/> Easy</span>
    </div>
  )
}

export default RecipeCard