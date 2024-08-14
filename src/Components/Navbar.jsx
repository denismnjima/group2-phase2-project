// src/components/Navbar.jsx
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <header>
       <h2 className="logo">Culinary <span>Voyage</span></h2>
       <nav>
        <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/recipes'><li>Recipes</li></Link>
        <Link to='/favourites'><li>Favourites</li></Link>
        </ul>
       </nav>
       <div className="top-button">
        <Icon.Person/>

       </div>
    </header>
  );
}

export default Navbar;
