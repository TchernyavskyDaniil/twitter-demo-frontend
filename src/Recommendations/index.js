import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import iconDelete from './delete.svg';
import iconCheck from './check.svg';
import iconPeople from './people.svg';

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

const Recommendations = styled.div`
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

  &:hover {
    text-decoration: underline;
  }
`;

const publicUrl = process.env.PUBLIC_URL;

const recommendation = [
  {
    id: 1,
    src: `${publicUrl}/img/rec-avatar-1.png`,
    name: 'AppleInsider',
    status: false,
    username: 'appleinsider',
  },
  {
    id: 2,
    src: `${publicUrl}/img/rec-avatar-2.png`,
    name: 'Creode',
    status: true,
    username: 'Creode',
  },
  {
    id: 3,
    src: `${publicUrl}/img/rec-avatar-3.png`,
    name: 'Epiphany Search',
    status: false,
    username: 'Epiphanysearch',
  },
];

export default () => (
  <React.Fragment>
    <Header>
      <Title>Who to follow</Title>
      <Options>
        <Dotted>·</Dotted>
        <Refresh>Refresh</Refresh>
        <Dotted>·</Dotted>
        <Option to="/view_all">View all</Option>
      </Options>
    </Header>
    <Recommendations>
      {recommendation.map(rec => (
        <Person key={rec.id}>
          <Recommended>
            <Info>
              <PersonLink to={`/${rec.username}`}>
                <Avatar src={rec.src} alt="avatar" />
                <Fullname>
                  <Name>{rec.name}</Name>
                  {rec.status && <Status src={iconCheck} />}
                </Fullname>
                <Username>{`@${rec.username}`}</Username>
              </PersonLink>
              <Follow primary>Follow</Follow>
            </Info>
            <Delete src={iconDelete} alt="icon delete" />
          </Recommended>
        </Person>
      ))}
    </Recommendations>
    <Search to="/all_people">
      <Image src={iconPeople} />
      <Desc>Find people you know</Desc>
    </Search>
  </React.Fragment>
);
