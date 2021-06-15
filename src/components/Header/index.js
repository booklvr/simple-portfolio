import styled from 'styled-components'
import logo from '../../assets/logo.svg'

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 4rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`

const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width: 48em) {
    display: none;
  }

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      height: 1rem;
      width: 0.5rem;
      background: var(--purple);
      transition: width 0.5s;
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
      width: 120%;
      background: var(--purple);
    }

    &:not(:last-child):hover::before {
      height: 100%;
      background: var(--purple);
    }
  }
`

const Header = () => {
  return (
    <Headers>
      <Logo>
        <img src={logo} alt='Logo' />
        <h3>Nick de Waal</h3>
      </Logo>
      <Nav>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#home'>Projects</a>
        <a href='#home'>Services</a>
        <a href='#contact'>Contact Me</a>
      </Nav>
    </Headers>
  )
}

export default Header
