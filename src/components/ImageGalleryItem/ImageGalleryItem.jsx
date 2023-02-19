import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledGalleryItem from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <StyledGalleryItem>
        <img
          src={this.props.thumbnail}
          alt={this.props.tags}
          onClick={this.props.onImageClick}
          data-fullsizeimage={this.props.fullSizeImage}
        />
      </StyledGalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  thumbnail: PropTypes.string,
  fullSizeImage: PropTypes.string,
  description: PropTypes.string,
  onImageClick: PropTypes.func,
};
