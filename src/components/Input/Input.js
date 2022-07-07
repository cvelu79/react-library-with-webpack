import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ id, size, type, label, name, placeholder, onChange }) => {
	return (
		<label htmlFor={id} className={`input-component input-component--${size}`}>
			<span>{label}</span>
			<input
				id={id}
				type={type === 'text' ? 'text' : 'number'}
				step={type === 'floating-point' ? 'any' : undefined}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</label>
	);
};

Input.propTypes = {
	size: PropTypes.oneOf(['medium', 'large']),
	type: PropTypes.oneOf(['text', 'number', 'floating-point']),
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func,
};

Input.defaultProps = {
	size: 'medium',
	type: 'text',
	onChange: undefined,
};

export default Input;
