import React, { Component } from "react";
import styled from "styled-components";
import location from "./location.svg";
import web from "./web.svg";
import reg from "./reg.svg";
import check from "./check.svg";

const Container = styled.div`
  background-color: #E6ECF0;
  width: 100%;
`;

const ProfileContainer = styled.div`
  padding-top: 41px;
  max-width: 300px;
`;

const ProfileTitle = styled.div``;

const Nickname = styled.div`

`;

const Text = styled.h1`
  margin: 0;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  letter-spacing: 0.02px;
`;

const Verified = styled.img``;

const StatusFollow = styled.p`
  margin: 0;
`;

const ProfileBio = styled.p`
  margin: 0;
`;

const Location = styled.div``;

const LocationIcon = styled.img``;

const Place = styled.div``;

const City = styled.span``;

const Country = City.extend``;

const WebSite = styled.div``;

const WebSiteIcon = styled.img``;

const Source = styled.a``;

const DateReg = styled.div``;

const DateIcon = styled.img``;

const Date = styled.div``;

const Month = styled.span``;

const Year = Month.extend``;

const Actions = styled.div``;

const Tweet = styled.button``;

const Message = styled.button``;

export default () => {
  return (
    <Container>
      <div className="container">
        <ProfileContainer>
          <ProfileTitle>
            <Nickname>
              <Text>
                Every Interaction
              </Text>
              <Verified alt="Verified user" src={check} />
            </Nickname>
            <StatusFollow>
              @EveryInteract Follows you
            </StatusFollow>
          </ProfileTitle>
          <ProfileBio>
            UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.
          </ProfileBio>
          <Location>
            <LocationIcon alt="location" src={location} />
            <Place>
              <City>
                London
              </City>,
              <Country>
                UK
              </Country>
            </Place>
            <WebSite>
              <WebSiteIcon alt="website" src={web} />
              <Source>
                everyinteraction.com
              </Source>
            </WebSite>
          </Location>
          <DateReg>
            <DateIcon alt="date registration" src={reg} />
            <Date>
              Joined
              <Month>
                May
              </Month>
              <Year>
                2008
              </Year>
            </Date>
          </DateReg>
          <Actions>
            <Tweet>
              Tweet to
            </Tweet>
            <Message>
              Message
            </Message>
          </Actions>
        </ProfileContainer>
      </div>
    </Container>
    );
}
