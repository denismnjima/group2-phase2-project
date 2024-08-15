import pizza from '../assets/pizaa.jpg'
import { useCurrentRecipe } from '../Hooks/currentRecipeStore'
import parse from 'html-react-parser'
function RecipeDetails() {
    const currentRecipe = useCurrentRecipe((state)=>state.currentRecipe)
  return (
    currentRecipe.length===0?'':
    <div>
        <h1>{currentRecipe[0].title}</h1>
        <section className='recipeDetails'>
            <img src={currentRecipe[0].image} />
            <p>{parse(currentRecipe[0].summary)}</p>
        </section>
        <section className='Procedure'>
        {
            currentRecipe[0].analyzedInstructions[0].steps.map((procedure)=>{
                return(  <div className="step" key={procedure.id}>
                            <h3>{procedure.number}</h3>
                            <p>{procedure.step}</p>        
                        </div>)

             })

               }
        </section>
    </div>

  )
}

export default RecipeDetails
