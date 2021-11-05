import React from 'react';
import './Header.scss'
const Header = ({name, currentDateTime}) => {
  return (
    <header id="header-current-weather" class="Header border">
      <h1 className="container-city">{name}</h1>
		  <h2 className="container-date">{currentDateTime}</h2>
    </header>
  )
}

export default Header