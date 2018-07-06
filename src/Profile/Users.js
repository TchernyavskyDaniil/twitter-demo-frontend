import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import Dropdown from "../UI/Dropdown";
import { api, token } from "../utils";

const UserList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const User = styled.li`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 3px 0;
`;

const Background = styled.img`
  width: 100%;
  max-height: 90px;
  object-fit: cover;
  background-color: lightgray;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 13px 15px;
  height: 160px;
  justify-content: flex-end;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 76px;
  object-fit: cover;
  position: absolute;
  top: -40px;
`;

const Desc = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  max-height: 100px;

  p {
    margin: 5px 0 0 0;
  }
`;

const DisplayName = styled.span`
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: #66757f;

  &:hover {
    text-decoration: underline;
  }
`;

class Users extends Component {
  state = {
    error: false,
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.getUsers();
    }
  }

  getUsers = () => {
    fetch(
      `${api}/accounts/${this.props.id}/${
        this.props.type
      }?access_token=${token}`
    )
      .then(res => res.json())
      .then(
        users => {
          this.setState({
            users
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
    const { error, users } = this.state;

    if (error) {
      return <h3> Can not load Users. Error {error.message}. </h3>;
    }

    return (
      <UserList>
        {users.map(user => (
          <User key={user.id}>
            <StLink to={`/${user.id}`}>
              <Background src={user.header_static} alt="user background" />
            </StLink>
            <Container>
              <StLink to={`/${user.id}`}>
                <Avatar src={user.avatar_static} alt="user avatar" />
              </StLink>
              <UserInfo>
                <DisplayName>{user.display_name}</DisplayName>
                <StLink to={`/${user.id}`}>
                  <UserName>@{user.username}</UserName>
                </StLink>
                <Desc dangerouslySetInnerHTML={{ __html: user.note }} />
              </UserInfo>
              <Actions>
                <Button primary>Читать</Button>
                <Dropdown />
              </Actions>
            </Container>
          </User>
        ))}
      </UserList>
    );
  }
}

export default Users;
