import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({ id, size, label, options, onChange }) => {
	return (
		<label htmlFor={id} className={`select-component select-component--${size}`}>
			<span>{label}</span>
			<select id={id} className="select-component" onChange={onChange}>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.description}
					</option>
				))}
			</select>
		</label>
	);
};

Select.propTypes = {
	id: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['medium', 'large']),
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		}),
	).isRequired,
	onChange: PropTypes.func,
};

Select.defaultProps = {
	size: 'medium',
	onChange: undefined,
};

export default Select;
