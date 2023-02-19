import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.styled';

export default class Button extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.onClick}>Load More...</StyledButton>
    );
  }
}
Button.propTypes = { onClick: PropTypes.func };
