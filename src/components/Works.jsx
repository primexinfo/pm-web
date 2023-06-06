import React, { useState } from "react";
import styled from "styled-components";
import Networking from "./Networking";
import ProductDesign from "./ProductDesign";
import Social from "./Social";
import WebDesign from "./WebDesign";

const data = [
  "Applications",
  "Business Solutions",
  "Cyber Security",
  "Digital Marketing",
  
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #EF4E23;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const isMediumOrLargeScreen = window.matchMedia('(max-width: 768px)').matches;
  const [work, setWork] = useState("Applications");
  return (
    <Section>
      <div className={`flex ${isMediumOrLargeScreen ? 'flex-col' : ''} justify-between`}
      >
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Applications" ? (
            <WebDesign />
          ) : work === "Business Solutions" ? (
            <Networking/>
          ) : work === "Cyber Security" ? (
            <ProductDesign />
          ):work === "Digital Marketing" ? (
            <Social/>
          ):""}
        </Right>
      </div>
    </Section>
  );
};

export default Works;