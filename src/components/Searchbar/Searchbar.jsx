import React from 'react';
import PropTypes from 'prop-types';

import StyledSearchbar from './Searchbar.styled';
import { SearchIcon } from 'components/svg/svg';

export const Searchbar = props => {
  const { onSearchSubmit } = props;
  return (
    <StyledSearchbar>
      <form className="form" onSubmit={onSearchSubmit}>
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
};

Searchbar.propTypes = {
  onSearchSubmit: PropTypes.func,
};
