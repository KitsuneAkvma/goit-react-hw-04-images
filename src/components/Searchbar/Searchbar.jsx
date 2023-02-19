import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledSearchbar from './Searchbar.styled';
import { SearchIcon } from 'components/svg/svg';

export default class Searchbar extends Component {
  render() {
    return (
      <StyledSearchbar>
        <form className="form" onSubmit={this.props.onSearchSubmit}>
          <button type="submit" className="button">
            <SearchIcon />
          </button>

          <input
            className="input"
            type="text"
            name="keyword"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </StyledSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSearchSubmit: PropTypes.func,
};
