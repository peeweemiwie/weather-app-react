import React from 'react';
import Button from './components/Button';
import './Form.scss';

const Form = ({ value }) => {
	return (
		<form className='Form'>
			<div className='container-input-search'>
				<input
					className='input-text'
					data-units='imperial'
					id='input-search'
					type='text'
					name=''
					placeholder='Enter city name'
					value=''
				/>
				<Button 
					className='mk-btn-primary'
					units='imperial'
					id='submit-search'
					value='Submit'
				/>
			</div>
			<div className='container-current-location-unit'>
				<Button 
					className='mk-btn-outline-primary'
					units='imperial'
					id='submit-current-location'
					value='Current Location'
				/>
				<Button 
					className='mk-btn-outline-secondary'
					units='imperial'
					id='submit-imperial'
					value='F'
				/>
				<Button 
					className='mk-btn-outline-secondary'
					units='metric'
					id='submit-metric'
					value='C'
				/>
			
			</div>
		</form>
	);
};

export default Form;
