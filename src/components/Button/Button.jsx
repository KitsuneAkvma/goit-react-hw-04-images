import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.styled';

export const Button = props => {
  const handleClick = props.onClick;
  return <StyledButton onClick={handleClick}>Load More...</StyledButton>;
};
Button.propTypes = { onClick: PropTypes.func };
