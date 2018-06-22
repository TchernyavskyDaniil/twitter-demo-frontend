import styled from 'styled-components';
import styledMap from 'styled-map';

export default styled.button`
  border-radius: 100px;
  padding: 8px 20px;
  border: 1px solid #1da1f2;
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  flex-grow: 1;
  white-space: nowrap;
  max-width: 100px;

  background-color: ${styledMap({
    primary: 'white',
    default: '#1da1f2',
  })};

  color: ${styledMap({
    primary: '#1da1f2',
    default: 'white',
  })};

  &:hover {
    opacity: 0.8;
    transition: all 0.1s ease-in-out;
    background-color: ${styledMap({
      primary: '#1da1f2',
    })};

    color: ${styledMap({
      primary: 'white',
    })};
  }

  &:focus {
    box-shadow: rgb(255, 255, 255) 0 0 0 2px, rgb(164, 217, 249) 0 0 0 4px;
    outline: 0;
  }
`;
