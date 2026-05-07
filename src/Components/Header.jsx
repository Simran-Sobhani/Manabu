import React from 'react'
import './header.css'
import manabu_logo from '../assets/img/unnamed.png'
import search_black from '../assets/img/search-w.png'
import pro_pic from '../assets/img/pro_pic.png'



function Header() {

  
  return (
  
    <div className='nav'>
      <img src={manabu_logo} alt="" className='Logo'/>

      <div className='search-box'>
        <input type="text" placeholder='Search' className='Search'/>
        <button className='button'><span><ion-icon name="search-outline"></ion-icon></span></button>
      </div>

      <ul>
        <li>Home</li>
        <li>Hiragana</li>
        <li>Katakana </li>
      </ul>

      <img src={pro_pic} alt="" className='profile'/>

    </div>
  )
}

export default Header