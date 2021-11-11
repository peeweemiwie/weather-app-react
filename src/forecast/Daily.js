import React from 'react';
import WeatherIcon from '../components/WeatherIcon';
import './Daily.scss';
const Daily = ({ day, month, date, icon, description, min, max }) => {
	return (
		<section className='Daily'>
			<div>
				<div className='major'>
					{day} {month} {date}
				</div>
				<div className='minor'>{description}</div>
			</div>
			<WeatherIcon icon={icon} description={description} />
			<div className='temperature'>
				<div className='high'>{max}</div>
				<div className='low'>{min}</div>
			</div>
		</section>
	);
};

export default Daily;
