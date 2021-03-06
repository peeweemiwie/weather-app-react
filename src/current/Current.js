import React from 'react';
import Header from './Header';
import Weather from './Weather';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Wind from './Wind';
import WeatherIcon from '../components/WeatherIcon';
import './Current.scss';

const Current = (props) => {
	console.log(props);
	return (
		<section className='Current' data-theme='light' id='current-weather'>
			<Header name={props.data.city} />
			<WeatherIcon
				icon={props.data.icon}
				description={props.data.description}
			/>
			<Weather description={props.data.description} main={props.data.weather} />
			<Temperature
				temperature={props.data.temperature}
				feelsLike={props.data.feelsLike}
			/>
			<Humidity humidity={props.data.humidity} />
			<Wind speed={props.data.wind} />
		</section>
	);
};

export default Current;
