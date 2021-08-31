import styled, { css } from 'styled-components/macro'
import React, { useState, useEffect } from 'react'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
// import { FaTimes } from 'react-icons/fa'
import useScrollPosition from '../../hooks/useScrollPosition'

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.color === 'black' ? 'var(--black)' : 'var(--background)'};
  /* background: ${(props) => (props.color === 'black' ? 'black' : 'white')} */
  /* background: black; */
  display: grid;
  align-items: center;
  /* margin-top: 80px; */

  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-120%')};
`

const SidebarWrapper = styled.div`
  color: ${(props) =>
    props.color === 'black' ? 'var(--white)' : 'var(--black)'};
`

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const whiteLink = css`
  color: var(--black);
  width: 15rem;
  padding: 1rem;
  background-color: var(--background);
  justify-content: center;
  align-items: center;

  box-shadow: 4px 4px 8px #adadad, -4px -4px 8px #ffffff;

  // color: ${({ focus }) => (focus ? `var(--primary)` : 'var(--black)')};

  &:hover {
    box-shadow: 6px 6px 15px var(--fontMedium), -6px -6px 15px #ffffff;
    transform: translate(-2px, -1px);
  }

  &:active {
    box-shadow: 2px 2px 5px #adadad, -2px -2px 5px #ffffff;
    transform: translate(1px, 2px);
  }
`

const blackLink = css`
  color: var(--white);
  background-color: black;

  &:hover {
    color: var(--primary);
    transition: 0.2s ease-in-out;
  }

  ${(props) =>
    props.focus &&
    css`
      background-color: var(--primary);
      color: white;

      &:hover {
        color: var(--white);
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.9);
      }
    `}
`

const linkStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  font-size: 1.4rem;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`

const SidebarLink = styled(LinkS)`
  ${linkStyles}

  ${(props) => (props.color === 'black' ? blackLink : whiteLink)}
`

const SidebarRoute = styled(LinkR)`
  ${linkStyles}

  ${(props) => (props.color === 'black' ? blackLink : whiteLink)};
`

const Sidebar = ({ isOpen, toggle }) => {
  const getBackgroundColor = () => {
    const inHeroSection = window.scrollY < window.innerHeight - 80

    console.log('inHeroSection', inHeroSection)

    if (inHeroSection) {
      setColor('black')
    } else {
      setColor('white')
    }
  }

  const [color, setColor] = useState('black')

  useEffect(() => {
    getBackgroundColor()
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  return (
    <SidebarContainer isOpen={isOpen} color={color} onClick={toggle}>
      <SidebarWrapper color={color}>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle} color={color}>
            About
          </SidebarLink>
          <SidebarLink to='projects' onClick={toggle} color={color}>
            Projects
          </SidebarLink>
          <SidebarLink to='skills' onClick={toggle} color={color}>
            Skills
          </SidebarLink>
          <SidebarRoute to={'/resume'} color={color}>
            Resume
          </SidebarRoute>
          <SidebarLink to='contact' onClick={toggle} color={color} focus={true}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
