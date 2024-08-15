import FilterBar from "./FilterSearch"
import { useSearch } from "../Hooks/searchStore"
function Search() {
    const searchResults = useSearch((state)=> state.searchResults)
  return (
    <section className="searchPage">
     <FilterBar/>
    <h2>We found <span>{searchResults.length}</span> results:</h2>
    {searchResults.length===0?(<h2>No results found</h2>):(
        <div>
        <div className="searchRes">
         {searchResults.map((item)=>{
            return(<div className="searchDiv" key={item.id} onClick={()=>{}}>
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