import React from 'react';
import Daily from './Daily';
import './Forecast.scss';

const Forecast = (props) => {
	console.log(props);
	return (
		<section className='Forecast' id='container-forecast'>
			<Daily
				day='Thu'
				month='Nov'
				date='4'
				description='clear sky'
				icon='01d'
				min={39}
				max={54}
			/>
		</section>
	);
};

export default Forecast;
