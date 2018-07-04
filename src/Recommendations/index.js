import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { api } from "../utils";
import iconDelete from "./icons/delete.svg";
import iconCheck from "./icons/check.svg";
import iconPeople from "./icons/people.svg";

const Recommended = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin-left: 50px;
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  position: absolute;
  left: 0;
  border-radius: 100px;
`;

const Info = styled.div`
  margin-left: 10px;
`;

const Name = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: black;
  word-break: break-all;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  display: inline-block;
`;

const PersonLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;

  &:hover {
    ${Name} {
      border-bottom: 1px solid black;
    }
  }
`;

const Follow = styled(Button)`
  padding: 7px 20px;
`;

const Status = styled.img`
  margin-left: 4px;
`;

const Username = Name.extend`
  font-weight: 400;
  color: #657786;
  padding-left: 4px;
`;

const Delete = styled.img`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const Person = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 8px;
  padding-top: 8px;
`;

const Fullname = styled.p`
  margin: 0;
  display: inline-block;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Options = styled.div``;

const Title = styled.h3`
  margin: 0;
  font-size: 17px;
  line-height: 20px;
`;

const Desc = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #1da1f2;
  margin: 0;
  margin-left: 8px;
  border-bottom: 1px solid transparent;
`;

const Search = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  &:hover {
    ${Desc} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

const Recommends = styled.div`
  margin-top: 6px;
  position: relative;
`;

const Option = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Dotted = styled.small`
  margin: 0 5px 0 5px;
`;

const Image = styled.img``;

const Refresh = styled.button`
  border: transparent;
  padding: 0;
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
  color: #1da1f2;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`;

class Recommendations extends Component {
  state = {
    error: false,
    recommendations: [],
    minIndex: 0,
    maxIndex: 3
  };

  componentDidMount() {
    this.getCommonFollowers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.getCommonFollowers();
    }
  }

  getCommonFollowers = () => {
    fetch(
      `${api}/accounts/${this.props.userId}/followers?access_token=${
        process.env.REACT_APP_KEY
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            recommendations: result,
            minIndex: 0,
            maxIndex: 3
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  handleClickRefresh = () => {
    this.setState(prevState => ({
      minIndex: prevState.minIndex + 3,
      maxIndex: prevState.maxIndex + 3
    }));
  };

  render() {
    const { error, recommendations, minIndex, maxIndex } = this.state;
    if (error) {
      return <h3>Error: {error.message}</h3>;
    }

    return (
      <React.Fragment>
        <Header>
          <Title>Who to follow</Title>
          <Options>
            <Dotted>·</Dotted>
            <Refresh onClick={this.handleClickRefresh}>Refresh</Refresh>
            <Dotted>·</Dotted>
            <Option to="/view-all">View all</Option>
          </Options>
        </Header>
        <Recommends>
          {recommendations.length < minIndex ? (
            <p>No recommendations</p>
          ) : (
            recommendations.map((rec, index) => (
              <React.Fragment key={rec.id}>
                {index >= minIndex &&
                  index < maxIndex && (
                    <Person>
                      <Recommended>
                        <Info>
                          <PersonLink to={`/${rec.id}`}>
                            <Avatar src={rec.avatar_static} alt="avatar" />
                            <Fullname>
                              <Name>{rec.display_name}</Name>
                              {rec.status && <Status src={iconCheck} />}
                            </Fullname>
                            <Username>{`@${rec.username}`}</Username>
                          </PersonLink>
                          <Follow primary>Follow</Follow>
                        </Info>
                        <Delete src={iconDelete} alt="icon delete" />
                      </Recommended>
                    </Person>
                  )}
              </React.Fragment>
            ))
          )}
        </Recommends>
        <Search to="/all-people">
          <Image src={iconPeople} />
          <Desc>Find people you know</Desc>
        </Search>
      </React.Fragment>
    );
  }
}

export default Recommendations;
