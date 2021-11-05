import React from 'react';
import Header from './Header';
import Weather from './Weather';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Wind from './Wind';
import WeatherIcon from '../components/WeatherIcon';
import './Current.scss';

const Current = () => {
  return (	
			<section 
				className="Current" 
				data-theme="light" 
				id="current-weather">
				<Header 
					name="New York" 
					currentDateTime="Thu Nov 4 2021 11:21am" />
				<WeatherIcon 
          icon="01d" 
          description="clear sky" />
				<Weather 
					description="clear sky" 
					main="Clear" 
				/>
				<Temperature 
					temperature={52} 
					feelsLike={50} />
				<Humidity
					humidity={54} />
				<Wind
					speed={1} />
			</section>
  )
}

export default Current;