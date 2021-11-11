import React, { useState } from 'react';
import './App.scss';
import Form from './Form';
import Current from './current/Current';
import Forecast from './forecast/Forecast';
import Footer from './Footer';
function App() {
	const [updatedWeatherData, setUpdatedWeatherData] = useState('');
	const storeDataHandler = (weatherData) => {
		setUpdatedWeatherData({ ...weatherData });
	};

	return (
		<div className='App' data-units='imperial'>
			<Form onReceiveRequest={storeDataHandler} />
			<main className='main'>
				<Current data={updatedWeatherData} />
				<Forecast />
			</main>
			<Footer />
		</div>
	);
}

export default App;
