import React from 'react';
import './Header.scss'
let Header = ({name, currentDateTime}) => {
  return (
    <header id="header-current-weather" class="Header">
      <h1 className="container-city">{name}</h1>
		  <h2 className="container-date">{currentDateTime}</h2>
    </header>
  )
}

export default Header