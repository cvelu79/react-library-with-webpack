import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.css';

const TextInput = ({ type = 'text', id, label, value, onChange }) => (
	<div className="simple-form-group">
		{label && (
			<label htmlFor={id} className="simple-text-label">
				{label}
			</label>
		)}
		<input
			type={type}
			id={id}
			className="simple-text-input"
			value={value}
			onChange={e => onChange && onChange(e.target.value)}
		/>
	</div>
);

export default TextInput;

TextInput.defaultProps = {
	type: 'text',
	label: '',
	value: '',
};

TextInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	value: PropTypes.string,
};
