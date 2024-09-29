import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Link as LinkR, NavLink } from "react-router-dom";
import { MenuRounded } from '@mui/icons-material'
import {Bio} from '../data/constants'

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarLogo = styled(LinkR)`
  padding: 0 20px;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-grow: 1;
  justify-content: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    color: white;
  }
`;

const MobileIcon= styled.div``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo to="/">Kasasa Trevor</NavbarLogo>
      <MobileIcon> <MenuRounded/> </MobileIcon>
      <NavItems>
        <StyledNavLink to="#About">About</StyledNavLink>
        <StyledNavLink to="#Skills">Skills</StyledNavLink>
        <StyledNavLink to="#Experience">Experience</StyledNavLink>
        <StyledNavLink to="#Projects">Projects</StyledNavLink>
        <StyledNavLink to="#Education">Education</StyledNavLink>
      </NavItems>
      <ButtonContainer>
        <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
      </ButtonContainer>
    </NavbarContainer>
  );
}

export default Navbar;
