import React from 'react';
import styled from 'styled-components';
import iconComment from '../Profile/comment.svg';
import iconRetweet from '../Profile/retweet.svg';
import iconLike from '../Profile/like.svg';
import iconMessage from '../Profile/message.svg';
import iconLikeActive from '../Profile/like-active.svg';

const Actions = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  padding-left: 0;
  margin: 14px 0 0 0;
`;

const Image = styled.img`
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
`;

const Action = styled.li`
  padding: 0;
  min-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  min-width: 50px;

  &:hover {
    ${Image} {
      border-bottom: 1px solid black;
    }
  }
`;

const Count = styled.span`
  margin-left: 11px;
  min-width: 18px;
  width: 18px;
  display: inline-block;
  min-height: 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: #667580;
`;

export default ({ comments, retweets, likes, messages, activeLike }) => (
  <Actions>
    <Action>
      <Image alt="comments" src={iconComment} />
      <Count>{comments}</Count>
    </Action>
    <Action>
      <Image alt="retweets" src={iconRetweet} />
      <Count>{retweets}</Count>
    </Action>
    <Action>
      {activeLike ? (
        <Image alt="likes" src={iconLikeActive} />
      ) : (
        <Image alt="likes" src={iconLike} />
      )}
      <Count>{likes}</Count>
    </Action>
    <Action>
      <Image alt="messages" src={iconMessage} />
      <Count>{messages}</Count>
    </Action>
  </Actions>
);
