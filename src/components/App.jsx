import React, { Component } from 'react';
import axios from 'axios';

import GlobalStyle from '../themes/GlobalStyles.styled';
import { Container } from './Container/Container.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

///// Element's global variables /////
const API_KEY = '32683324-b0ce690598d4af74b245f496c';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;

export class App extends Component {
  state = {
    results: [],
    filter: '',
    currentPage: 1,
    currentImage: ``,
    total: 0,
    totalPages: 0,
    isModalOpen: false,
    isLoading: false,
  };

  ///// GETting images from pixabay API /////
  fetchData(keyword, page) {
    // Set page to loading state
    this.setState({ isLoading: true });

    // GET images using axios
    axios(API_URL + `&q=${keyword}&page=${page}&per_page=20`).then(async result => {
      // Update states
      // It also connects previous results with next page's ones into one array
      this.setState(prevState => {
        return {
          results: [...prevState.results, ...result.data.hits],
          total: result.data.totalHits,
          totalPages: Math.round(result.data.totalHits / 20),
        };
      });
      // Unset page from loading state and save searched phrase for later comparison
      this.setState({ isLoading: false, filter: keyword });

      // Increment page counter
      this.setState(prevState => {
        return { currentPage: prevState.currentPage + 1 };
      });
    });
  }
  //--------------------
  handleNewSearch = e => {
    // Prevent refreshing after submit
    e.preventDefault();

    // Getting form data
    const form = e.currentTarget;
    const keyword = form.keyword.value;
    this.setState({ results: [], currentPage: 1 });
    this.fetchData(keyword, 1);
  };
  //--------------------
  handleModalDisplay = e => {
    // If user clicked on anything but img -> close the modal window
    if (e.target.tagName.toLowerCase() !== 'img') {
      this.setState({ isModalOpen: false });
    }
    // Close the modal window also by pressing Esc
    if (e.key === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };
  //--------------------
  handleImageClick = e => {
    const image = e.currentTarget.dataset.fullsizeimage;
    // Set modal state to open
    // Update currentImage state by getting link from element's attributes
    this.setState({ isModalOpen: true });
    this.setState({ currentImage: image });
  };
  //--------------------
  handleLoadMore = (prevFilter, props) => {
    // If searched phrase changes -> reset page counter
    if (prevFilter === this.state.filter) {
      this.setState({ currentPage: 1 });
    }

    const filter = this.state.filter;
    const nextPage = this.state.currentPage;
    this.fetchData(filter, nextPage);
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container className="App">
          {/* Render modal if isModalOpen is true, otherwise do not. */}
          {this.state.isModalOpen && (
            <Modal fullsizeimage={this.state.currentImage} handleModal={this.handleModalDisplay} />
          )}
          <Searchbar onSearchSubmit={this.handleNewSearch} />
          <ImageGallery
            onGalleryRender={this.handleIGalleryDisplay}
            images={this.state.results}
            onImageClick={this.handleImageClick}
            currentPage={this.state.currentPage}
          />
          {/* Display loader when page is loading(fetching) */}
          {this.state.isLoading && <Loader />}
          {/* Display loadMore button if there are any results and hide it when there is no more results */}{' '}
          {/* Also display page counter with button */}
          {this.state.results.length !== 0 && this.state.currentPage - 1 <= this.state.totalPages ? (
            <>
              {' '}
              <Button onClick={this.handleLoadMore} />
              <p>
                Page: {this.state.currentPage - 1} / {this.state.totalPages + 1}
              </p>
            </>
          ) : (
            //  Show communicate if there aren't any results
            <p>THERE IS NO RESULTS</p>
          )}
        </Container>
      </>
    );
  }
}

export default App;
