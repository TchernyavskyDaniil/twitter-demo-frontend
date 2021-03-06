import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formattedTweet } from "../utils";
import Header from "./Header";

const Hashtag = styled.span`
  color: #1da1f2;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
`;

const TrendLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding-bottom: 10px;
  min-height: 20px;

  &:hover {
    ${Hashtag} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

const Desc = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: #697787;
`;

const Tweets = Desc.extend``;

const Index = styled.ul`
  margin: 14px 0 0 0;
  padding: 0;
  list-style: none;
`;

const Trend = styled.li``;

export const trends = [
  {
    id: 1,
    to: "#BringYourDogToWorkDay",
    desc: null,
    count: null
  },
  {
    id: 2,
    to: "#FridayFeeling",
    desc: null,
    count: 12100
  },
  {
    id: 3,
    to: "#BrexitAnniversary",
    desc: "It’s one year since the UK voted to leave the European Union",
    count: null
  },
  {
    id: 4,
    to: "HMS Queen Elizabeth",
    desc: null,
    count: 1036
  },
  {
    id: 5,
    to: "Joe Budden",
    desc: null,
    count: 1036
  },
  {
    id: 6,
    to: "Trident",
    desc: null,
    count: 6136
  }
];

export default () => (
  <React.Fragment>
    <Header>United Kingdom Trends</Header>
    <Index>
      {trends.map(trend => (
        <Trend key={trend.id}>
          <TrendLink to={`/search?q=${trend.to}`}>
            <Hashtag>{trend.to}</Hashtag>
            <Desc>{trend.desc}</Desc>
            {trend.count > 0 && (
              <Tweets> {formattedTweet(trend.count)} Tweets </Tweets>
            )}
          </TrendLink>
        </Trend>
      ))}
    </Index>
  </React.Fragment>
);
