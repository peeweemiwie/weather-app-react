import React from 'react';
import './Button.scss';

const Button = ({ className, units, value, type, clickEvent, submitEvent }) => {
	return (
		<input
			className={`Button mk-btn ${className}`}
			data-units={units}
			type={type}
			value={value}
			onClick={clickEvent}
			onSubmit={submitEvent}
		/>
	);
};

export default Button;
