import { Route,Routes } from "react-router-dom"
import Homapage from "./Components/Homapage"
import RecipesPage from "./Components/RecipesPage"
import FavouritesPage from "./Components/FavouritesPage"
import { fetchRandom } from "./Services"
import { useEffect } from "react"
import {useRecipe} from './Hooks/recipeStore'
import SingleRecipepage from "./Components/SingleRecipepage"
function App() {
  const {random, setRandom} = useRecipe((state)=>({
    random:state.random,
    setRandom:state.setRandom
  }))
  useEffect(()=>{
    handleFetchRandom()
    console.log(random)
  },[])
  const handleFetchRandom = async()=>{
    const data = await fetchRandom()
    if(data){
      setRandom(data)
    }
  }
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homapage />}></Route>
      <Route path="/recipes" element={<RecipesPage />}></Route>
      <Route path="/favourites" element={<FavouritesPage />}></Route>
      <Route path="/view" element={<SingleRecipepage />}></Route>
    </Routes>
    </div>
  )
}

export default App