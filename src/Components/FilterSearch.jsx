// src/components/SearchBar.jsx

import React, { useState } from 'react';


function FilterBar({ onSearch }) {


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
        placeholder="Search for a recipe..."
      />
      <div className="choices">
      <input type='checkbox' id='glutin'/>
      <label htmlFor="glutin"> Glutin Free</label>

      <input type='checkbox' id='vegaterian'/>
      <label htmlFor="vegaterian">Vegeterian</label>
      </div>

      <button type="submit">Search</button>
    </form>
    </div>

  );
}

export default FilterBar;
