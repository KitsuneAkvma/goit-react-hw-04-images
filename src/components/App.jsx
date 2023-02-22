import React, { useState } from 'react';
import axios from 'axios';

import GlobalStyle from '../themes/GlobalStyles.styled';
import { Container } from './Container/Container.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

///// Element's global variables /////
const API_KEY = '32683324-b0ce690598d4af74b245f496c';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;

export const App = () => {
  /// States ///
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImage, setCurrentImage] = useState('');

  const [totalImages, setTotalImages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (keyword, page) => {
    setIsLoading(true);

    axios(API_URL + `&q=${keyword}&page=${page}&per_page=20`).then(async result => {
      /// states updates
      setResults(prevState => [...prevState, ...result.data.hits]);
      if (totalImages !== result.data.totalHits) {
        setTotalImages(result.data.totalHits);
        setTotalPages(Math.round(result.data.totalHits / 20));
      }

      setIsLoading(false);
      setFilter(keyword);
      setCurrentPage(prevState => prevState + 1);
      console.log(result);
    });
  };
  //--------------------
  const handleNewSearch = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const keyword = form.keyword.value;

    setResults([]);
    setCurrentPage(1);
    fetchData(keyword, currentPage);
  };

  const handleLoadMore = () => {
    fetchData(filter, currentPage);
  };
  //--------------------
  const handleImageClick = e => {
    const image = e.currentTarget.dataset.fullsizeimage;

    setIsModalOpen(true);
    setCurrentImage(image);
  };

  const handleModalDisplay = e => {
    if (e.target.tagName.toLowerCase() !== 'img') {
      setIsModalOpen(false);
    }

    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container className="App">
        {isModalOpen && <Modal fullsizeimage={currentImage} onModalClose={handleModalDisplay} />}
        <Searchbar onSearchSubmit={handleNewSearch} />
        <ImageGallery images={results} onImageClick={handleImageClick} />

        {isLoading && <Loader />}

        {results.length !== 0 && currentPage <= totalPages ? (
          <>
            {' '}
            <Button onClick={handleLoadMore} />
            <p>
              Page: {currentPage - 1} / {totalPages}
            </p>
          </>
        ) : (
          //  Show communicate if there aren't any results
          <p>THERE IS NO RESULTS</p>
        )}
      </Container>
    </>
  );
};

export default App;
