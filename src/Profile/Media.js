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
  margin: 5px 0 0 5px;
`;

const MediaLink = styled(Link)``;

const Image = styled.img`
  width: 83px;
  background-color: #66757f;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 1px 2px 0 black;
  }
`;

export default () => (
  <Content>
    <Title to="/media" src={iconMedia} alt="media icon">
      522 Photos and videos
    </Title>
    <MediaBox>
      <Media>
        <MediaLink to="/media1">
          <Image
            src={`${process.env.PUBLIC_URL}/img/media-1.png`}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media2">
          <Image
            src={`${process.env.PUBLIC_URL}/img/media-2.png`}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media3">
          <Image
            src={`${process.env.PUBLIC_URL}/img/media-3.png`}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media4">
          <Image
            src={`${process.env.PUBLIC_URL}/img/media-4.png`}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media5">
          <Image
            src={`${process.env.PUBLIC_URL}/img/media-5.png`}
            alt="media"
          />
        </MediaLink>
      </Media>
      <Media>
        <MediaLink to="/media6">
          <Image
            src={`${process.env.PUBLIC_URL}/img/media-6.png`}
            alt="media"
          />
        </MediaLink>
      </Media>
    </MediaBox>
  </Content>
);
