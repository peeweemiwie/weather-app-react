import React, { useState } from 'react';
import axios from 'axios';
import './Form.scss';
import './components/Button.scss';

const Form = (props) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState(null);
	const [feelsLike, setFeelsLike] = useState(null);
	const [description, setDescription] = useState('');
	const [weather, setWeather] = useState('');
	const [humidity, setHumidity] = useState(null);
	const [wind, setWind] = useState(null);
	const [icon, setIcon] = useState('');
	const [dt, setDt] = useState('');
	const [loaded, setLoaded] = useState(false);

	const setResponseData = (response) => {
		const data = response.data;
		console.log(data);
		setTemperature(Math.round(data.main.temp));
		setFeelsLike(Math.round(data.main.feels_like));
		setDescription(data.weather[0].description);
		setWeather(data.weather[0].main);
		setHumidity(data.main.humidity);
		setWind(data.wind.speed);
		setIcon(data.weather[0].icon);
		setDt(data.dt);
		setLoaded(true);
	};

	if (loaded) {
		const weatherData = {
			city: city,
			temperature: temperature,
			feelsLike: feelsLike,
			weather: weather,
			description: description,
			humidity: humidity,
			wind: wind,
			icon: icon,
			dt: dt,
			loaded: loaded,
		};
		props.onReceiveRequest(weatherData);
		setCity('');
		setLoaded(false);
	}

	const changeHandler = (event) => {
		setCity(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		let apiKey = 'ca544697c48cca918d7f2cc001774bb3';
		let apiEndpoint = 'https://api.openweathermap.org/data/2.5/';
		let units = 'imperial';
		const baseUrl = `${apiEndpoint}weather?q=${city}&units=${units}&appid=${apiKey}`;
		axios.get(baseUrl).then(setResponseData);
	};

	return (
		<form className='Form' onSubmit={submitHandler}>
			<div className='container-input-search'>
				<input
					className='input-text'
					onChange={changeHandler}
					placeholder='Enter city name'
					type='text'
					value={city}
				/>
				<button className='Button mk-btn mk-btn-primary' type='submit'>
					Submit
				</button>
			</div>
			<div className='container-current-location-unit'>
				{/* <Button
					className='mk-btn-outline-primary'
					units='imperial'
					type='button'
					value='Current Location'
				/>
				<Button
					className='mk-btn-outline-secondary'
					units='imperial'
					type='button'
					value='F'
				/>
				<Button
					className='mk-btn-outline-secondary'
					units='metric'
					type='button'
					value='C'
				/> */}
			</div>
		</form>
	);
};

export default Form;
