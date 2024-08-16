import pizza from '../assets/pizaa.jpg'
import { useCurrentRecipe } from '../Hooks/currentRecipeStore'
import { useFavourites } from '../Hooks/favouriteStore'
import parse from 'html-react-parser'
function RecipeDetails() {
    const currentRecipe = useCurrentRecipe((state)=>state.currentRecipe)
    const {favorites,setFavourites} = useFavourites((state)=>({
      favorites:state.favorites,
      setFavourites:state.setFavourites
    }))
    function makeFav(){
      if(currentRecipe[0].id){
        setFavourites(currentRecipe[0].id)
        alert('added to favourites')
      }

    }
  return (
    currentRecipe.length===0?'':
    <section className='recipes--stuff'>
    <div className='recipe-det-cont'>
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
    <div className='Recipe-Info'>
      <h4 className='tag-title'>Diets</h4>
      <div className='tags'>
      {currentRecipe[0].diets.map((item,index)=>{
        return(<span key={index}>{item}</span>)
      })}
      </div>

      <h4 className='tag-title'>Ocassions</h4>
      <div className='tags'>
      {currentRecipe[0].occasions.map((item,index)=>{
        return(<span key={index}>{item}</span>)
      })}
      </div>


      <div className='meta'>
        <div>
          <p>Preparation time</p>
          <p>{currentRecipe[0].preparationMinutes} Mins</p>
        </div>
        <div>
          <p>Cooking time</p>
          <p>{currentRecipe[0].readyInMinutes} Mins</p>
        </div>
        <div>
          <p>Health Score</p>
          <p>57</p>
        </div>
      </div>

      <div className='meta'>
      {currentRecipe[0].extendedIngredients.map((item,index)=>{
        return(
          <div>
          <p>{item.aisle}</p>
          <p>{item.amount}</p>
        </div>
        )
      })}
      </div>

      <button className='favs' onClick={makeFav}>Add To Favourites</button>
    </div>
    </section>

  )
}

export default RecipeDetails
