import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { api, token } from "../utils";
import iconFollower from "./icons/follower.svg";
import Title from "./Title";

const Common = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const FollowerList = styled.ul`
  margin: -8px 0 0 -8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
`;

const Follower = styled.li`
  list-style: none;
  margin: 5px 0 0 5px;
`;

const Avatar = styled.img`
  width: 49px;
  background-color: #66757f;

  &:hover {
    box-shadow: 0 1px 2px 0 black;
  }
`;

const StLink = styled(Link)``;

class Followers extends Component {
  state = {
    error: false,
    followers: []
  };

  componentDidMount() {
    this.getCommonFollowers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getCommonFollowers();
    }
  }

  getCommonFollowers = () => {
    fetch(
      `${api}/accounts/${
        this.props.match.params.id
      }/followers?access_token=${token}`
    )
      .then(res => res.json())
      .then(
        followers => {
          this.setState({
            followers
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  render() {
    const { followers, error } = this.state;
    if (error) {
      return <h3>Error: {error.message}. Can not load Common Followers.</h3>;
    }

    return (
      <Common>
        <Title
          to={`${this.props.match.url}/followers`}
          src={iconFollower}
          alt="follower icon"
        >
          {followers.length} Followers you now
        </Title>
        <FollowerList>
          {followers.map(follower => (
            <React.Fragment key={follower.id}>
              {followers.length <= 10 && (
                <Follower>
                  <StLink to={`/${follower.id}`}>
                    <Avatar
                      src={follower.avatar_static}
                      alt={`avatar ${follower.username}`}
                    />
                  </StLink>
                </Follower>
              )}
            </React.Fragment>
          ))}
        </FollowerList>
      </Common>
    );
  }
}

export default Followers;
