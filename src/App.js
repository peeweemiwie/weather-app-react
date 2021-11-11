import React, { useState } from 'react';
import './App.scss';
import Form from './Form';
import Current from './current/Current';
import Forecast from './forecast/Forecast';
import Footer from './Footer';

const DUMMY_DATA = {
	city: 'new york',
	temperature: 58,
	feelsLike: 57,
	weather: 'Clouds',
	description: 'broken clouds',
	humidity: 70,
	wind: 1.01,
	icon: '04d',
	dt: 1636666149,
	loaded: true,
};

function App() {
	// WIP - use DUMMY_DATA instead
	const [updatedWeatherData, setUpdatedWeatherData] = useState('');
	const storeDataHandler = (weatherData) => {
		setUpdatedWeatherData({ ...weatherData });
	};

	return (
		<div className='App' data-units='imperial'>
			<Form onReceiveRequest={storeDataHandler} />
			<main className='main'>
				<Current data={DUMMY_DATA} />
				<Forecast />
			</main>
			<Footer />
		</div>
	);
}

export default App;
