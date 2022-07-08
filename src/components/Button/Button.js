import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';
import logo from '../../assets/images/logo.png';

class Button extends Component {
	handleOnClick = () => {
		this.props.onClick();
	};

	render() {
		const classes = `${this.props.className ? `button ${this.props.className}` : 'button'}`;

		return (
			<div>
				<button type="button" className={classes} onClick={this.handleOnClick}>
					<img src={logo} className="icon" alt="icon" />
					{this.props.label.lenght !== 0 && this.props.label}
				</button>
			</div>
		);
	}
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string,
	className: PropTypes.string,
};

Button.defaultProps = {
	label: '',
	className: '',
};

export default Button;
