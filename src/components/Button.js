import React from 'react';
import './Button.scss';

const Button = ({className, unit, id, value}) => {
  return (
    <input
			className={`Button mk-btn ${className}`}
			data-units={unit}
			id={id}
			type='submit'
			value={value}
		/>
  )
}

export default Button;