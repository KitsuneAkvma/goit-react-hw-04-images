import React from 'react';
import PropTypes from 'prop-types';

import StyledModal from './Modal.styled';

export const Modal = props => {
  const { onModalClose, fullsizeimage } = props;
  return (
    <StyledModal className="overlay" onClick={onModalClose}>
      <img src={fullsizeimage} alt="cat" />
    </StyledModal>
  );
};

Modal.propTypes = {
  fullsizeimage: PropTypes.string,
  onModalClose: PropTypes.func,
};
