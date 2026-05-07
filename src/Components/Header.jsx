import React from 'react'
import './header.css'
import manabu_logo from '../assets/img/unnamed.png'
import search_black from '../assets/img/search-w.png'
import pro_pic from '../assets/img/pro_pic.png'

import { Link } from "react-router-dom";

function Header() {

  
  return (
  
    <div className='nav'>
      <img src={manabu_logo} alt="" className='Logo'/>

      <div className='search-box'>
        <input type="text" placeholder='Search' className='Search'/>
        <button className='button'><span><ion-icon name="search-outline"></ion-icon></span></button>
      </div>

      <ul>
        <li><Link to={"/"}>Decks</Link></li>
        <li><Link to={"/letters"}>Letters</Link></li>
      </ul>

      <img src={pro_pic} alt="" className='profile'/>

    </div>
  )
}

export default Header