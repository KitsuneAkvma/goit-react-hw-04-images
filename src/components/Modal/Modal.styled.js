import styled from 'styled-components';

const StyledModal = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 30, 0.65);

  img {
    max-width: 90vw;
    max-height: 90vh;

    object-fit: contain;
  }
`;

export default StyledModal;
