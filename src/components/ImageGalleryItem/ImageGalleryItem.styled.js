import styled from 'styled-components';

const StyledGalleryItem = styled.div`
  width: 19rem;
  height: 15rem;

  box-shadow: -13px 9px 27px -20px rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;

  transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: scale(0.95);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default StyledGalleryItem;
