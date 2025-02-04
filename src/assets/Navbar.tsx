import React from 'react';
import "./Navbar.css"

function Navbar({ query, onQueryChange, onKeyDown }:any) {
  return (
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li id='search'>
          <input
            type="text"
            placeholder="Search for a Title"
            value={query}
            onChange={onQueryChange}
            onKeyDown={onKeyDown}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
