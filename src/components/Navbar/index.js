import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import logo from '../../assets/logo.svg'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'

const Nav = styled.nav`
  display: flex;
  height: 80px;
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  color: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100vw;
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 calc(5rem + 5vw);

  @media only Screen and (max-width: 48em) {
    padding: 0 2rem;
  }
`

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 4rem; */
  height: auto;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  img {
    height: 60px;
    width: auto;
    z-index: 1000;
    margin-right: 0.5rem;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.75rem;
`

const NavLink = styled(LinkS)`
  color: var(--white);
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid var(--purple);
  }
`

const NavLinkR = styled(LinkR)`
  color: var(-white);
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`

const NavLinkButton = styled(NavLink)`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
`

const HamburgerButton = styled.button`
  display: none;
  position: relative;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: transparent;

  transition: background-color 0.15s;

  @media only Screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`

const HamburgerSpan = styled.span`
  width: 2rem;
  height: 2px;
  background-color: ${(props) => (props.isOpen ? 'transparent' : 'white')};
  position: relative;

  &::before,
  &::after {
    content: '';
    background-color: var(--white);
    color: white;
    width: 2rem;
    height: 2px;
    /* display: inline-block; */
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.isOpen ? '0' : '-0.5rem')};
    transform: ${(props) => (props.isOpen ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    top: ${(props) => (props.isOpen ? '0' : '0.5rem')};
    transform: ${(props) => (props.isOpen ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`

// const MobileMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem 0;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   right: 0;
//   opacity: ${(props) => (props.clicked ? '1' : 0)};
//   visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};

//   background: rgba(53, 53, 63, 0.95);
//   border-radius: 0;
//   margin: 0.5rem;
//   overflow-x: hidden;

//   a {
//     color: var(--white);
//     font-weight: 600;
//     font-size: 1.5rem;
//     margin: 1.5rem;
//     cursor: pointer;
//   }
// `

const Navbar = ({ toggle, isOpen }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>
          <img src={logo} alt='Logo' />
          <h3>Nick de Waal</h3>
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='projects'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='skills'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLinkR
              to='/resume'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Resume
            </NavLinkR>
          </NavItem>
          <NavItem>
            <NavLinkButton
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Contact
            </NavLinkButton>
          </NavItem>
        </NavMenu>
        <HamburgerButton onClick={toggle} isOpen={isOpen}>
          <HamburgerSpan isOpen={isOpen} />
        </HamburgerButton>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
