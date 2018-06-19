import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styledMap from 'styled-map';

const ContentLink = styled(Link)`
  margin: 8px 0 0 8px;
`;

const ContentView = styled.img`
  width: ${styledMap({
    sizeWidth: '82px',
    default: '43px',
  })};

  background-color: #66757f;
  border-radius: ${styledMap({
    sizeWidth: '2px',
    default: 'none',
  })};
`;

export default ({ contentLink, contentSrc, contentAlt, contentSize }) => (
  <ContentLink to={contentLink}>
    {contentSize ? (
      <ContentView src={contentSrc} alt={contentAlt} sizeWidth />
    ) : (
      <ContentView src={contentSrc} alt={contentAlt} />
    )}
  </ContentLink>
);
