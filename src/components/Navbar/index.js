import styled, { css } from 'styled-components/macro'
import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

import logoBlack from '../../assets/logo-black.svg'
import logoWhite from '../../assets/logo-white.svg'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'
import useScrollPosition from '../../hooks/useScrollPosition'

const Nav = styled.nav`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100vw;

  ${(props) =>
    (props.show &&
      css`
        opacity: 1;
        z-index: 1000;
        transition-property: opacity, z-index;
        transition-duration: 0.4s, 0.4s, 0.2s;
        transition-timing-function: ease-in;
      `) ||
    css`
      opacity: 0;
      z-index: -10;
      transition-property: opacity, z-index, box-shadow;
      transition-duration: 1s, 1s, 0.5s;
      transition-timing-function: ease-in;
      transition-delay: 0.5s, 0.5s, 0s;
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
      justify-content: center;
      align-items: center;
      box-shadow: 8px 8px 15px #adadad;
    `};

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      z-index: 1000;
    `};
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
  height: auto;
  cursor: pointer;
  text-decoration: none;
  color: ${({ color }) => (color === 'black' ? 'white' : 'black')};

  img {
    height: 3rem;
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

const linkStyle = css`
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-out;
`

const blackLinkStyle = css``

const whiteLinkStyle = css`
  box-shadow: 4px 4px 8px #adadad, -4px -4px 8px #ffffff;
  color: var(--black) !important;

  &.active {
    box-shadow: 4px 4px 8px var(--primary), -4px -4px 8px #ffffff;
  }

  &:hover {
    box-shadow: ${({ color }) =>
      color === 'black'
        ? 0
        : '6px 6px 15px var(--fontMedium), -6px -6px 15px #ffffff'};
    transform: translate(-2px, -1px);
    &.active {
      box-shadow: 6px 6px 15px var(--primary), -6px -6px 15px #ffffff;
    }
  }

  &:active {
    box-shadow: 2px 2px 5px #adadad, -2px -2px 5px #ffffff;
    transform: translate(1px, 2px);
  }
`

const NavLink = styled(LinkS)`
  ${linkStyle}

  ${(props) => (props.color === 'black' ? blackLinkStyle : whiteLinkStyle)}
`

const NavLinkR = styled(LinkR)`
  ${linkStyle}

  ${(props) => (props.color === 'black' ? blackLinkStyle : whiteLinkStyle)}
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

  &::before,
  &::after {
    content: '';
    background-color: ${(props) =>
      props.color === 'black' ? 'white' : 'black'};
    width: 2rem;
    height: 2px;
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
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  // let history = useHistory()

  const [showNav, setShowNav] = useState(true)
  const [color, setColor] = useState('black')

  const effect = (scrollDirection, color) => {
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
  }

  const handleNavLinkClick = () => {
    setTimeout(navLinkCallBack, 1000)
  }

  // const handleResumeLinkClick = () => {
  //   handleNavLinkClick()
  //   history.push('/')
  // }

  return (
    <Nav id='nav' show={showNav} color={color} isOpen={isOpen}>
      <NavbarContainer color={color}>
        <NavLogo to='/' onClick={toggleHome} color={color}>
          {(color === 'black' && <img src={logoWhite} alt='Logo' />) || (
            <img src={logoBlack} alt='Logo' />
          )}
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
              offset={-100}
              color={color}
              onClick={handleNavLinkClick}
            >
              Projects
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              to='testimonials'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-100}
              color={color}
              onClick={handleNavLinkClick}
            >
              Testimonials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLinkButton
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-140}
              color={color}
            >
              Contact
            </NavLinkButton>
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
        </NavMenu>
        <HamburgerButton onClick={toggle} isOpen={isOpen} color={color}>
          <HamburgerSpan isOpen={isOpen} color={color} />
        </HamburgerButton>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
