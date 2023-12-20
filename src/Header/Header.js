import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='headerLeft'>
            <Link to="/"><img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/DRAMA_%2B_PHAM_VIET_DUNG_XO.png/640px-DRAMA_%2B_PHAM_VIET_DUNG_XO.png" alt='not found'/></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
      </div>
    </div>
  )
}

export default Header
