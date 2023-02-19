import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import StyledGallery from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    ///// render variables /////
    const images = this.props.images;

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
                  onImageClick={this.props.onImageClick}
                />
              </li>
            );
          })}
        </ul>
      </StyledGallery>
    );
  }
}
ImageGallery.propTypes = {
  onGalleryRender: PropTypes.func,
  images: PropTypes.array,
  onImageClick: PropTypes.func,
  currentPage: PropTypes.number,
};
