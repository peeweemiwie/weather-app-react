import React from 'react';
import WeatherIcon from '../components/WeatherIcon';
import './Daily.scss';
const Daily = ({day, month, date, icon, description, min, max}) => {
  return (
    <section class="Daily">
      <div>
        <div class="major">{day} {month} {date}</div>
        <div class="minor">{description}</div>
      </div>
      <WeatherIcon icon={icon} description={description} />
      <div className="temperature">
        <div class="high">{max}</div>
        <div class="low">{min}</div>
      </div>
    </section>
  )
}

export default Daily;