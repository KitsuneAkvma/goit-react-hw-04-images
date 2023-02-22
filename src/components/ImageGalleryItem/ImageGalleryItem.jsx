import React from 'react';
import PropTypes from 'prop-types';

import StyledGalleryItem from './ImageGalleryItem.styled';

export const ImageGalleryItem = props => {
  const { thumbnail, tags, onImageClick, fullSizeImage } = props;
  return (
    <StyledGalleryItem>
      <img src={thumbnail} alt={tags} onClick={onImageClick} data-fullsizeimage={fullSizeImage} />
    </StyledGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  thumbnail: PropTypes.string,
  fullSizeImage: PropTypes.string,
  description: PropTypes.string,
  onImageClick: PropTypes.func,
};
