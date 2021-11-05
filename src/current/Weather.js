import React from 'react';
import WeatherIcon from '../components/WeatherIcon';
import './Weather.scss';
let Weather = ({ icon, description, main}) => {
  return (
    <section className="Weather">
        <WeatherIcon 
          icon={icon} 
          description={description} />
        <div className="major">{main}</div>
		    <div className="minor">{description}</div>
    </section>
  )
}

export default Weather