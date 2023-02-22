import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import StyledGallery from './ImageGallery.styled';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = props => {
  const { images, onImageClick } = props;

  return (
    <StyledGallery>
      <ul>
        {images.map(image => {
          return (
            <li key={shortid.generate()}>
              <ImageGalleryItem
                thumbnail={image.webformatURL}
                fullSizeImage={image.largeImageURL}
                description={image.tags}
                onImageClick={onImageClick}
              />
            </li>
          );
        })}
      </ul>
    </StyledGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  onImageClick: PropTypes.func,
};
