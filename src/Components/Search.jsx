import FilterBar from "./FilterSearch"
import { useCurrentRecipe } from "../Hooks/currentRecipeStore"
import { useSearch } from "../Hooks/searchStore"
import { fetchSingle } from "../Services"
import { useNavigate } from "react-router-dom"
function Search() {
    const searchResults = useSearch((state)=> state.searchResults)
    const navigate = useNavigate()
    const {currentRecipe,setCurrentRecipe}= useCurrentRecipe((state)=>({
      currentRecipe:state.currentRecipe,
      setCurrentRecipe:state.setCurrentRecipe
    }))
   async function handleSearch(id){
    let data = await fetchSingle(id)
    setCurrentRecipe([data])
    navigate('/view')
    }
  return (
    <section className="searchPage">
     <FilterBar/>
    <h2>We found <span>{searchResults.length}</span> results:</h2>
    {searchResults.length===0?(<h2>No results found</h2>):(
        <div>
        <div className="searchRes">
         {searchResults.map((item)=>{
            return(<div className="searchDiv" key={item.id} onClick={()=>{handleSearch(item.id)}}>
                        <img src={item.image} />
                        <h3>{item.title}</h3>
                 </div>)
         })}
        </div>
    </div>
    )}
    </section>
  )
}

export default Search