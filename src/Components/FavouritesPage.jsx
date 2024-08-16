import Navbar from "./Navbar"
import { useState, useEffect } from "react"
import RecipeCard from "./RecipeCard"
import { useFavourites } from "../Hooks/favouriteStore"
import { fetchFavourites } from "../Services/RecipeService"
function FavouritesPage() {
  const {favorites,setFavourites} = useFavourites((state)=>({
    favorites:state.favorites,
    setFavourites:state.setFavourites
  }))
  const [favs,setFavs] = useState([])
  async function favoriteFetch(favs) {
    let data = await fetchFavourites(favorites)
    setFavs(data)
  }
  useEffect(()=>{
    favoriteFetch()
  },[favorites])
  return (
    <div className="recipes-page">
        <h2>Favourites</h2>
        <div className="recipesContainer">
        {favs.length===0?'':favs.map((single)=>{
          return(<RecipeCard recipe={single} key={single.id}/>)
        })}
        </div>
    </div>
  )
}

export default FavouritesPage