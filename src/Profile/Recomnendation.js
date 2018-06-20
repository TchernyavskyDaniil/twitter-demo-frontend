import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import iconDelete from './delete.svg';
import iconCheck from './check.svg';

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

export default ({ src, to, name, status, username }) => (
  <Person>
    <Recommended>
      <Info>
        <PersonLink to={to}>
          <Avatar src={src} alt="avatar" />
          <Fullname>
            <Name>{name}</Name>
            {status && <Status src={iconCheck} />}
          </Fullname>
          <Username>{username}</Username>
        </PersonLink>
        <Follow primary>Follow</Follow>
      </Info>
      <Delete src={iconDelete} alt="icon delete" />
    </Recommended>
  </Person>
);
