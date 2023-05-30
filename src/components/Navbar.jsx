import React from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  overflow: hidden;
  z-index: 1;
  top: 0;
  padding: 10px 0px;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #ef4e23;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <a href="#hero"> <Logo src="./img/primex logo White.png" /></a>
         
          <List>
            <ListItem> <a href="#hero">Home</a> </ListItem>
            <ListItem> <a href="#service">Services</a>
               <HiChevronDown />
            </ListItem>
            <ListItem> <a href="#works">Products</a> </ListItem>
            <ListItem> <a href="#Prices">Prices</a></ListItem>
            <ListItem> <a href="#contact">Contact</a> </ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button> <a href="#contact">Hire Now</a></Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
