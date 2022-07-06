import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';
import logo from '../../assets/images/logo.png';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = (e) => {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <button onclick={this.handleOnClick}><img alt="logo" className="img" src={logo} /></button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;