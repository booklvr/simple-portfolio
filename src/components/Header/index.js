import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }

  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`

const Nav = styled.nav`
  width: 28rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width: 48em) {
    display: none;
  }

  div {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;
    font-size: 1.1rem;
    position: relative;

    &:not(:last-child)::before {
      content: '';
      display: inline-block;
      bottom: 0;
      height: 100%;
      width: 3px;
      background: var(--purple);
      transition: height 0.2s;
      margin-bottom: -0.4rem;
      margin-right: 0.25rem;
      z-index: 1000;
    }

    &::after {
      content: '';
      display: block;
      height: 3px;
      width: 3px;
      background: transparent;
      transition: width 0.5s;
    }

    &:not(:last-child):hover::after {
      width: 110%;
      background: var(--purple);
    }

    &:not(:last-child):hover::before {
      height: 0;
      background: var(--purple);
    }
  }
`

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  color: var(--white);
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
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
  }

  span {
    width: 2rem;
    height: 2px;
    background-color: ${(props) => (props.clicked ? 'transparent' : 'white')};
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
      top: ${(props) => (props.clicked ? '0' : '-0.5rem')};
      transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
    }

    &::after {
      top: ${(props) => (props.clicked ? '0' : '0.5rem')};
      transform: ${(props) =>
        props.clicked ? 'rotate(-135deg)' : 'rotate(0)'};
    }
  }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? '1' : 0)};
  visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};

  background: rgba(53, 53, 63, 0.95);
  border-radius: 0;
  margin: 0.5rem;
  overflow-x: hidden;

  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`

const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  useEffect(() => {}, [])

  return (
    <Headers>
      <Logo>
        <img src={logo} alt='Logo' />
        <h3>Nick de Waal</h3>
      </Logo>
      <Nav>
        <div href='#home'>Home</div>
        <div href='#about'>About</div>
        <div href='#home'>Projects</div>
        <div href='#home'>Services</div>
        <a href='#contact'>
          <Button>Contact Me</Button>
        </a>
      </Nav>
      <HamburgerButton onClick={() => handleClick()} clicked={click}>
        <span />
      </HamburgerButton>
      <MobileMenu clicked={click}>
        <a href='#home' onClick={() => handleClick()}>
          Home
        </a>
        <a href='#about' onClick={() => handleClick()}>
          About Us
        </a>
        <a href='#services' onClick={() => handleClick()}>
          Services
        </a>
        <a href='#contact' onClick={() => handleClick()}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  )
}

export default Header
