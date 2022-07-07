import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ children, className }) => {
	const classes = `${className ? `card ${className}` : 'card'}`;

	return <div className={classes}>{children}</div>;
};

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Card.defaultProps = {
	className: '',
};

export default Card;
