import React, { useState } from 'react';
import Button from './components/Button';
import './Form.scss';

const Form = () => {
	const [city, setCity] = useState('');
	const changeHandler = (event) => {
		setCity(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
	};
	return (
		<form className='Form' onSubmit={submitHandler}>
			<div className='container-input-search'>
				<input
					className='input-text'
					data-units='imperial'
					type='text'
					placeholder='Enter city name'
					onChange={changeHandler}
				/>
				<Button
					className='mk-btn-primary'
					type='submit'
					units='imperial'
					value='Submit'
				/>
			</div>
			<div className='container-current-location-unit'>
				<Button
					className='mk-btn-outline-primary'
					type='submit'
					units='imperial'
					value='Current Location'
				/>
				<Button
					className='mk-btn-outline-secondary'
					type='submit'
					units='imperial'
					value='F'
				/>
				<Button
					className='mk-btn-outline-secondary'
					type='submit'
					units='metric'
					value='C'
				/>
			</div>
		</form>
	);
};

export default Form;
