// src/components/SearchBar.jsx
import { useSearch } from "../Hooks/searchStore";
import { fetchSearch } from "../Services";
import { useNavigate } from "react-router-dom";
function FilterBar({ onSearch }) {
  const {setSearchQuery,searchQuery,setSearchResults} = useSearch((state)=>({
    searchQuery: state.searchQuery,
    setSearchQuery:state.setSearchQuery,
    setSearchResults:state.setSearchResults
  }))
  const navigate = useNavigate()
  async function hanleSearch(event){
    event.preventDefault()
    let data = await fetchSearch(searchQuery)
    setSearchResults(data)
    navigate('/search')
  }
  return (
    <div className="form-conatiner">
      <div className='content'>
      <h1>WELCOME TO CULINARY VOYAGE RECIPE</h1>
      <p className='paragragh'>All you need to do is enter an ingredient, a dish or a keyword.<br></br>You can also select a specific tag from the dropdown. There’s sure to be something tempting for you to try.

Enjoy!</p>
    </div>
    <form className="filter-bar">
      <input
        type="text"
        placeholder="Search for a recipe or ingridients..."
        onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <button type="submit" onClick={hanleSearch}>Search</button>
    </form>
    </div>

  );
}

export default FilterBar;
