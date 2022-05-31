import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
export const Header = () => {
  return (
    <div id="header">
      <div id="menu-section">
        
        <span ><Link to="/" style={{textDecoration:'none'}}>Coins</Link></span>
      
        <span><Link to="/" style={{textDecoration:'none'}}>Exchanges</Link></span>
      
        <span><Link to="/" style={{textDecoration:'none'}}>Swap</Link></span>
      
  </div>
      <div id="menu-logo">
        <img
          src="https://iconape.com/wp-content/png_logo_vector/coincap.png"
          alt="coincap logo"
        />
      </div>
      <div id="widgets">
        <input type="text" id="search-box" name="search-box" />
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-gear"></i>
        <button>Connect Wallet</button>
      </div>
    </div>
  )
}
