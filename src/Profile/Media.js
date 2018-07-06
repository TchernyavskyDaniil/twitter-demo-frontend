import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { PortalWithState } from "react-portal";
import Title from "./Title";
import { api, token } from "../utils";
import iconMedia from "./icons/media.svg";

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

const MediaSt = styled.li`
  list-style: none;
  padding: 0;
  margin: 5px 0 0 5px;
  cursor: pointer;
`;

const Image = styled.img`
  width: ${styledMap({
    increasedSize: "50%",
    default: "83px"
  })};
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

class Media extends Component {
  state = {
    error: false,
    count: null,
    media: []
  };

  componentDidMount() {
    this.getMediaInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getMediaInfo();
    }
  }

  getMediaInfo = async () => {
    await fetch(
      `${api}/accounts/${
        this.props.match.params.id
      }/statuses?only_media=yes&access_token=${token}`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            media: result,
            count: 0
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );

    this.state.media.map(mediaElem =>
      this.setState(prevState => ({
        count: prevState.count + mediaElem.media_attachments.length
      }))
    );
  };

  render() {
    const { count, error, media } = this.state;
    if (error) {
      return <h3>Can not render Media</h3>;
    }
    return (
      <Content>
        <Title
          to={`${this.props.match.url}/media`}
          src={iconMedia}
          alt="media icon"
        >
          {count} Photos and videos
        </Title>
        <MediaBox>
          {media.map(mediaItem => (
            <React.Fragment key={mediaItem.id}>
              {mediaItem.media_attachments.map(attachment => (
                <React.Fragment key={attachment.id}>
                  {attachment.id < 9 && (
                    <MediaSt>
                      <PortalWithState closeOnOutsideClick closeOnEsc>
                        {({ openPortal, closePortal, portal }) => (
                          <React.Fragment>
                            <Image
                              src={attachment.preview_url}
                              alt="media"
                              onClick={openPortal}
                            />
                            {portal(
                              <Modal onClick={closePortal}>
                                <ModalContent>
                                  <Image
                                    src={attachment.url}
                                    alt="media"
                                    onClick={openPortal}
                                    increasedSize
                                  />
                                </ModalContent>
                              </Modal>
                            )}
                          </React.Fragment>
                        )}
                      </PortalWithState>
                    </MediaSt>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </MediaBox>
      </Content>
    );
  }
}

export default Media;
