import React from 'react';
import './Form.scss';

let Form = ({ value }) => {
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
				<input
					className='wa-btn wa-btn-primary'
					data-units='imperial'
					id='submit-search'
					type='submit'
					value='Search'
				/>
			</div>
			<div className='container-current-location-unit'>
				<input
					className='wa-btn wa-btn-outline-primary'
					data-units='imperial'
					id='submit-current-location'
					type='submit'
					value='Current Location'
				/>
				<input
					className='wa-btn wa-btn-outline-secondary'
					data-units='imperial'
					id='submit-imperial'
					type='submit'
					value='F'
				/>
				<input
					className='wa-btn wa-btn-outline-secondary'
					data-units='metric'
					id='submit-metric'
					type='submit'
					value='C'
				/>
			</div>
		</form>
	);
};

export default Form;
