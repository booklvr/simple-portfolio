import styled, { css } from 'styled-components/macro'
import React, { useState, useEffect, useRef } from 'react'

// import logo from '../../assets/logo.svg'
import logoBlack from '../../assets/logo-black.svg'
import logoWhite from '../../assets/logo-white.svg'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'
import useScrollPosition from '../../hooks/useScrollPosition'
// import { useScrollPosition } from '../../hooks/useScrollPosition'

const Nav = styled.nav`
  display: flex;
  height: 80px;
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100vw;

  ${(props) =>
    (props.show &&
      css`
        opacity: ;
        z-index: 1000;
        transition: all 0.4s ease-in;
      `) ||
    css`
      opacity: 0;
      z-index: -10;
      transition: all 1s ease-in;
    `};

  ${(props) =>
    (props.color === 'black' &&
      css`
        color: var(--white);
        background-color: var(--black);
      `) ||
    css`
      color: var(--black);
      background-color: var(--background);
      /* top: 10px;
      width: calc(100vw - 2rem); */
      justify-content: center;
      align-items: center;
      box-shadow: 8px 8px 15px #adadad;
      /* border-radius: 10px; */
    `};
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;

  padding: ${({ color }) =>
    color === 'black' ? '0 calc(5rem + 5vw)' : '0 calc(3rem + 5vw)'};
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
  color: ${({ color }) => (color === 'black' ? 'white' : 'black')};

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

  color: ${({ color }) =>
    color === 'black' ? 'var(--white)' : 'var(--black)'};
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
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;

  /* box-shadow: 4px 4px 8px #adadad, -4px -4px 8px #ffffff; */
  box-shadow: ${({ color }) =>
    color === 'black' ? 0 : '4px 4px 8px #adadad, -4px -4px 8px #ffffff'};
  /* color: ${({ color }) =>
    color === 'black' ? 'var(--white)' : 'var(--black)'}; */
  /* ${(props) => (props.color === 'black' && css``) || css``}; */
  &.active {
    /* border-bottom: 3px solid var(--primary); */
    box-shadow: 4px 4px 8px var(--primary), -4px -4px 8px #ffffff;
  }
`

const NavLinkR = styled(LinkR)`
  color: var(-white);
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem 1rem;
  ${(props) =>
    (props.color === 'black' &&
      css`
        color: var(--white);
      `) ||
    css`
      color: var(--black) !important;
      box-shadow: 4px 4px 8px #adadad, -4px -4px 8px #ffffff;
      border-radius: 10px;
    `};
`

const NavLinkButton = styled(NavLink)`
  padding: 0.5rem 1rem;

  ${(props) =>
    props.color === 'black' &&
    css`
      background-color: var(--primary);
    `};
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

  background-color: ${(props) =>
    props.isOpen ? 'transparent' : props.color === 'black' ? 'white' : 'black'};
  position: relative;
  /* background-color: black; */

  &::before,
  &::after {
    content: '';
    background-color: ${(props) =>
      props.color === 'black' ? 'white' : 'black'};
    /* background-color: white; */
    /* background-color: black; */
    /* color: white; */
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

const Navbar = ({ toggle, isOpen }) => {
  // const getScrollYPosition = () => {
  //   return window.scrollY
  // }

  // const previousPosition = useRef(getScrollYPosition())

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  // const [buttonEffect, setButtonEffect] = useState(true)
  const [showNav, setShowNav] = useState(true)
  const [color, setColor] = useState('black')

  // const changeProps = () => {
  //   setButtonEffect(!buttonEffect)
  // }
  const effect = (scrollDirection, color) => {
    console.log('in the fucking effect this time')
    color === 'black' ? setColor('black') : setColor('white')
    scrollDirection === 'up' ? setShowNav(true) : setShowNav(false)
  }
  // get the scroll direction and set the navbar color
  // ** takes in a callback, and a setTimeout limit;
  useScrollPosition(effect, 300)

  const navLinkCallBack = () => {
    if (!showNav) {
      setShowNav(true)
    }
    console.log('afterTimeout')
    console.log('showNav', showNav)
  }

  const handleNavLinkClick = () => {
    console.log('before timeout')
    console.log('showNav', showNav)
    setTimeout(navLinkCallBack, 1000)
  }

  return (
    <Nav show={showNav} color={color}>
      <NavbarContainer color={color}>
        <NavLogo to='/' onClick={toggleHome} color={color}>
          {(color === 'black' && <img src={logoWhite} alt='Logo' />) || (
            <img src={logoBlack} alt='Logo' />
          )}

          <h3>Nick de Waal</h3>
        </NavLogo>

        <NavMenu color={color}>
          <NavItem>
            <NavLink
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              color={color}
              onClick={handleNavLinkClick}
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
              color={color}
              onClick={handleNavLinkClick}
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
              color={color}
              onClick={handleNavLinkClick}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLinkR
              to='/resume'
              style={{ textDecoration: 'none', color: 'white' }}
              color={color}
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
              color={color}
            >
              Contact
            </NavLinkButton>
          </NavItem>
        </NavMenu>
        <HamburgerButton onClick={toggle} isOpen={isOpen} color={color}>
          <HamburgerSpan isOpen={isOpen} color={color} />
        </HamburgerButton>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
