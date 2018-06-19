import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconMedia from './media.svg';
import Title from './Title';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const MediaBox = styled.ul`
  margin: -8px 0 0 -8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const Media = styled.li`
  list-style: none;
  padding: 0;
  margin: 8px 0 0 8px;
`;

const MediaLink = styled(Link)``;

const MediaView = styled.img`
  width: 83px;
  background-color: #66757f;
  border-radius: 4px;
`;

export default () => (
  <Content>
    <Title
      titleLink="/media"
      titleSrc={iconMedia}
      titleAlt="media icon"
      titleText="522 Photos and videos"
    />
    <MediaBox>
      <Media>
        <MediaLink to="/media1">
          <MediaView
            src={process.env.PUBLIC_URL + '/img/media-1.png'}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media2">
          <MediaView
            src={process.env.PUBLIC_URL + '/img/media-2.png'}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media3">
          <MediaView
            src={process.env.PUBLIC_URL + '/img/media-3.png'}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media4">
          <MediaView
            src={process.env.PUBLIC_URL + '/img/media-4.png'}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media5">
          <MediaView
            src={process.env.PUBLIC_URL + '/img/media-5.png'}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media6">
          <MediaView
            src={process.env.PUBLIC_URL + '/img/media-6.png'}
            alt="media"
          />
        </MediaLink>
      </Media>
    </MediaBox>
  </Content>
);
