import { Route,Routes } from "react-router-dom"
import Homapage from "./Components/Homapage"
import RecipesPage from "./Components/RecipesPage"
import FavouritesPage from "./Components/FavouritesPage"
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homapage />}></Route>
      <Route path="/recipes" element={<RecipesPage />}></Route>
      <Route path="/favourites" element={<FavouritesPage />}></Route>
    </Routes>
    </div>
  )
}

export default App