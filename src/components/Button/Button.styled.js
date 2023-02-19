import styled from 'styled-components';

const StyledButton = styled.button`
  width: 12rem;
  height: 3rem;
  margin-inline: auto;
  margin-top: 10rem;

  background-color: #395fab;
  border: none;
  border-radius: 5px;

  color: #eef3fe;
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 0.2em;

  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.15);
  }
`;

export default StyledButton;
