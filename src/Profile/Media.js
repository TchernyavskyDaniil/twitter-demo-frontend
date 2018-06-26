import React from 'react';
import styled from 'styled-components';
import { PortalWithState } from 'react-portal';
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
  cursor: pointer;
`;

const Image = styled.img`
  width: 83px;
  background-color: #66757f;
  border-radius: 4px;
  user-select: none;

  &:hover {
    box-shadow: 0 1px 2px 0 black;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`;

const ModalContent = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  text-align: center;
`;

const media = [
  {
    id: 1,
    src: `${process.env.PUBLIC_URL}/img/media-1.png`,
  },
  {
    id: 2,
    src: `${process.env.PUBLIC_URL}/img/media-2.png`,
  },
  {
    id: 3,
    src: `${process.env.PUBLIC_URL}/img/media-3.png`,
  },
  {
    id: 4,
    src: `${process.env.PUBLIC_URL}/img/media-4.png`,
  },
  {
    id: 5,
    src: `${process.env.PUBLIC_URL}/img/media-5.png`,
  },
  {
    id: 6,
    src: `${process.env.PUBLIC_URL}/img/media-6.png`,
  },
];

export default ({ match }) => (
  <Content>
    <Title to={`${match.url}/media`} src={iconMedia} alt="media icon">
      522 Photos and videos
    </Title>
    <MediaBox>
      {media.map(mediaItem => (
        <Media key={mediaItem.id}>
          <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, portal }) => (
              <React.Fragment>
                <Image src={mediaItem.src} alt="media" onClick={openPortal} />
                {portal(
                  <Modal onClick={closePortal}>
                    <ModalContent>
                      <Image
                        src={mediaItem.src}
                        alt="media"
                        onClick={openPortal}
                        fullSize
                      />
                    </ModalContent>
                  </Modal>,
                )}
              </React.Fragment>
            )}
          </PortalWithState>
        </Media>
      ))}
    </MediaBox>
  </Content>
);
