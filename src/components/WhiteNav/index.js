import styled, { css } from 'styled-components'
import logo from '../../assets/logo.svg'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'

import React, { useEffect, useState, useRef } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const Nav = styled.nav`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  
  
  height: 80px;
  /* margin:  */
  /* margin-top: -60px; */
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  color: var(--black);
  position: sticky;
  top: 10px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  
  box-shadow: 8px 8px 15px #adadad;
  border-radius: 10px;

  transition: all 5s ease-in;
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
  color: var(--mainFont);

  img {
    background: #000;
    color: #fff;
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
  color: var(--mainFont);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  /* border-radius: 5px;
  /* width: 6rem; */
  height: 2rem;
  text-align: center;
  /* box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff; */

  &.active {
    /* border-bottom: 3px solid var(--primary); */
  }
`

const NavLinkR = styled(LinkR)`
  color: var(--mainFont);
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`

const NavLinkButton = styled(NavLink)`
  background-color: var(--primary);
  padding: 0.5rem 1rem;
`

const HamburgerButton = styled.button`
  display: none;
  position: relative;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: var(--background);

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

const WhiteNav = ({ toggle, isOpen, show, color }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  // const rendersCount = useRef(0)

  // const [showOnScroll, setShowOnScroll] = useState(true)
  // const [showWhiteNav, setShowWhiteNav] = useState(true)
  // const [topNav, setTopNav] = useState(true)

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     console.log('currPos', currPos)
  //     const isShow = currPos < prevPos
  //     if (isShow !== showOnScroll) {
  //       setShowOnScroll(isShow)
  //     }
  //     const showWhite = currPos < window.innerHeight - 80
  //     if (showWhite !== showWhiteNav) setShowWhiteNav(showWhite)
  //     const top = currPos < 100
  //     console.log(currPos, 'currPos')
  //     console.log('top', top)
  //     if (top !== topNav) setTopNav(top)
  //     showOnScroll ? console.log('up') : console.log('down')
  //   },

  //   [showOnScroll],
  //   null,
  //   true,
  //   400
  // )

  return (
    <Nav show={show} color={color}>
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
              style={{ textDecoration: 'none', color: '#505050' }}
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

export default WhiteNav
