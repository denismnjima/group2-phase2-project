// src/components/Navbar.jsx
import * as Icon from 'react-bootstrap-icons'
function Navbar() {
  return (
    <header>
       <h2 className="logo">Culinary <span>Voyage</span></h2>
       <nav>
        <ul>
          <li>Home</li>
          <li>Recipes</li>
          <li>Favourites</li>
        </ul>
       </nav>
       <div className="top-button">
        <Icon.Person/>

       </div>
    </header>
  );
}

export default Navbar;
