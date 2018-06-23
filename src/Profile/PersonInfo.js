import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconCheck from './check.svg';
import Button from '../UI/Button';

const Profile = styled.div`
  padding-top: 32px;
`;

const ProfileTitle = styled.div``;

const Person = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nickname = styled(Link)`
  margin: 0;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const Verified = styled.img`
  margin-left: 5px;
  margin-top: 4px;
`;

const Follow = styled.div`
  padding-top: 6px;
`;

const FollowLink = styled(Link)`
  background: transparent;
  padding-left: 0;
  border: none;
  color: #697787;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FollowState = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: #697787;
  padding-left: 6px;
`;

const ProfileBio = styled.p`
  margin: 0;
  padding-top: 12px;
  font-size: 14px;
  line-height: 20px;
  color: #14171a;
  padding-bottom: 2px;
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  padding-top: 5px;
`;

const Info = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 4px;
`;

const InfoIcon = styled.img``;

const Desc = styled.p`
  margin: 0;
  padding-left: 13px;
  font-size: 14px;
  line-height: 28px;
  color: #697787;
`;

const Ref = styled.a`
  padding-left: 13px;
  font-size: 14px;
  line-height: 28px;
  text-decoration: none;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Actions = styled.div`
  padding-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 39px;
`;

const Action = styled(Button)`
  max-width: 100%;
  width: 100%;

  &:last-child {
    margin-left: 7px;
  }
`;

export default ({
  name,
  verfStatus,
  nickname,
  followStatus,
  desc,
  locAlt,
  locSrc,
  loc,
  refAlt,
  refSrc,
  website,
  dateAlt,
  dateSrc,
  date,
}) => (
  <Profile>
    <ProfileTitle>
      <Person>
        <Nickname to={`/${nickname}`}>{name}</Nickname>
        {verfStatus && <Verified alt="Verified user" src={iconCheck} />}
      </Person>
      <Follow>
        <FollowLink to={`/${nickname}`}>{`@${nickname}`}</FollowLink>
        {followStatus && <FollowState>Follows you</FollowState>}
      </Follow>
    </ProfileTitle>
    <ProfileBio>{desc}</ProfileBio>
    <ProfileInfo>
      <Info>
        <InfoIcon alt={locAlt} src={locSrc} />
        <Desc>{loc}</Desc>
      </Info>
      <Info>
        <InfoIcon alt={refAlt} src={refSrc} />
        <Ref href={website}>{website}</Ref>
      </Info>
      <Info>
        <InfoIcon alt={dateAlt} src={dateSrc} />
        <Desc>{date}</Desc>
      </Info>
      <Actions>
        <Action>Tweet to</Action>
        <Action>Message</Action>
      </Actions>
    </ProfileInfo>
  </Profile>
);
