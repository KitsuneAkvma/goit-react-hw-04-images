import styled from 'styled-components';

const StyledSearchbar = styled.header`
  padding-block: 2.3rem;

  background-color: #395fab;
  box-shadow: -1px 10px 19px -6px rgba(0, 0, 0, 0.75);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  form {
    display: flex;

    input {
      display: block;
      width: 55%;
      height: 1.5em;
      margin-inline: auto;

      border-radius: 10px;

      text-align: center;
      font-size: 1.5em;

      transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &:focus {
        outline: none;
      }
    }
    button {
      position: absolute;
      left: 23%;
      height: 2.6rem;

      background: none;
      border: none;

      transition: transform 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      cursor: pointer;
      &:hover {
        transform: scale(1.15);
      }
    }
  }
`;

export default StyledSearchbar;
