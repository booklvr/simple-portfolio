import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components/macro'
import logo from '../../assets/logo.svg'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'
import BlackNav from '../BlackNav'
import WhiteNav from '../WhiteNav'
import useSetNav from '../../hooks/useSetNav'
import { useScrollPosition } from '../../hooks/useScrollPosition'

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
    border-bottom: 3px solid var(--primary);
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
  background-color: var(--primary);
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

const Navbar = ({ toggle, isOpen }) => {
  const [showNav, setShowNav] = useState({ show: true, color: 'black' })

  // const [showOnScroll, setShowOnScroll] = useState(true)
  // const [showBlackNav, setShowBlackNav] = useState(true)

  const getScrollYPosition = () => {
    return window.scrollY
  }
  const rendersCount = useRef(0)
  const previousPosition = useRef(getScrollYPosition())

  // useEffect(() => {
  //   let throttleTimeout = null

  //   const callBack = () => {
  //     console.log('scroll event callback')

  //     const currentPosition = getScrollYPosition()
  //     console.log(currentPosition, 'currentPosition')
  //     console.log(previousPosition.current, 'previousPosition')
  //     const scrollingUp = currentPosition < previousPosition.current
  //     // if scrolling up
  //     if (scrollingUp) {
  //       console.log('we are scrolling up', showNav)
  //       console.log('scrollingUp', scrollingUp)

  //       // if in first viewport height show black nav
  //       if (currentPosition < window.innerHeight - 80) {
  //         // if showNav.show is set to false
  //         // setShowNav.show to true and color to black
  //         if (!showNav.show) {
  //           console.log('set show to true and color to black')
  //           setShowNav({ show: true, color: 'black' })
  //           previousPosition.current = currentPosition
  //         }
  //       }
  //       // if the current position is below the first viewport height
  //       else {
  //         if (!showNav.show) {
  //           console.log('set show to true and color to white')
  //           setShowNav({ show: true, color: 'white' })
  //           previousPosition.current = currentPosition
  //         }
  //       }
  //       // if scrolling down
  //     } else {
  //       console.log('we are scrolling down')
  //       if (showNav.show) {
  //         console.log('set scroll to false and color to null')
  //         setShowNav({ show: false, color: null })
  //         previousPosition.current = currentPosition
  //       }
  //     }

  //     throttleTimeout = null
  //   }

  //   const handleScroll = () => {
  //     console.log('handle scroll')
  //     if (throttleTimeout === null) {
  //       throttleTimeout = setTimeout(callBack, 400)
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [showNav])

  // useScrollPosition(({ prevPos, currPos }) => {
  //   console.log('currPos', currPos)
  //   console.log('prevPos', prevPos)
  //   const scrollUp = currPos < prevPos
  //   console.log('what the fuck')

  //   // if the direction changes
  //   if (scrollUp && scrollUp !== showNav.show) {
  //     console.log('different', scrollUp !== showNav.show)
  //     // if it is the first view height of page
  //     if (scrollUp && currPos < window.innerHeight - 80) {
  //       console.log('window in first viewport height', 'black')
  //       setShowNav({
  //         show: scrollUp,
  //         color: 'black',
  //       })
  //     } else if (scrollUp && currPos > window.innerHeight - 80) {
  //       console.log('window beyond first viewpoint', 'white')
  //       setShowNav({
  //         show: scrollUp,
  //         color: 'white',
  //       })
  //     }
  //   } else if (!scrollUp && scrollUp !== showNav.show) {
  //     console.log('hide the fucking nav')
  //     setShowNav({
  //       show: scrollUp,
  //       color: null,
  //     })
  //   }
  // })
  // const [blackNav, setBlackNav] = useState(true)

  // const blackNav = useSetNav()
  // console.log(blackNav)

  // useEffect(() => {
  //   console.log('window.innerHeight', window.innerHeight)
  //   console.log('window.scrollY', window.scrollY)
  //   const changeNav = () => {
  //     if (window.scrollY >= window.innerHeight - 160) {
  //       setBlackNav(false)
  //     } else if (window.scrollY < window.innerHeight - 160) {
  //       setBlackNav(true)
  //     }
  //   }
  //   window.addEventListener('scroll', changeNav)
  //   // return window.removeEventListener('scroll', changeNav)
  // }, [blackNav])

  return (
    <>
      <BlackNav
        isOpen={isOpen}
        toggle={toggle}
        show={showNav.show}
        color={showNav.color}
      />
    </>
  )
}

export default Navbar

// <WhiteNav
//         toggle={toggle}
//         isOpen={isOpen}
//         scrollDown={scrollDown}
//         showBlackNav={showBlackNav}
//       />

// {showNav.show &&
//   ((showNav.color === 'black' && (
//     <BlackNav
//       isOpen={isOpen}
//       toggle={toggle}
//       show={showNav.show}
//       color={showNav.color}
//     />
//   )) ||
//     (showNav.color === 'white' && (
//       <WhiteNav
//         isOpen={isOpen}
//         toggle={toggle}
//         show={showNav.show}
//         color={showNav.color}
//       />
//     )))}

// {scrollDown &&
// ((showBlackNav && <BlackNav toggle={toggle} isOpen={isOpen} />) || (
//   <WhiteNav toggle={toggle} isOpen={isOpen} />
// ))}

// <Nav>
//   <NavbarContainer>
//     <NavLogo to='/' onClick={toggleHome}>
//       <img src={logo} alt='Logo' />
//       <h3>Nick de Waal</h3>
//     </NavLogo>
//     <NavMenu>
//       <NavItem>
//         <NavLink
//           to='about'
//           smooth={true}
//           duration={500}
//           spy={true}
//           exact='true'
//           offset={-80}
//         >
//           About
//         </NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink
//           to='projects'
//           smooth={true}
//           duration={500}
//           spy={true}
//           exact='true'
//           offset={-80}
//         >
//           Projects
//         </NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink
//           to='skills'
//           smooth={true}
//           duration={500}
//           spy={true}
//           exact='true'
//           offset={-80}
//         >
//           Services
//         </NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLinkR
//           to='/resume'
//           style={{ textDecoration: 'none', color: 'white' }}
//         >
//           Resume
//         </NavLinkR>
//       </NavItem>
//       <NavItem>
//         <NavLinkButton
//           to='contact'
//           smooth={true}
//           duration={500}
//           spy={true}
//           exact='true'
//           offset={-80}
//         >
//           Contact
//         </NavLinkButton>
//       </NavItem>
//     </NavMenu>
//     <HamburgerButton onClick={toggle} isOpen={isOpen}>
//       <HamburgerSpan isOpen={isOpen} />
//     </HamburgerButton>
//   </NavbarContainer>
// </Nav>
