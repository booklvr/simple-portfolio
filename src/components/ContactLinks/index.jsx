import styled from 'styled-components/macro'
import React from 'react'
import github from '../../assets/github.svg'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'

const ContactLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`

const ContactLink = styled.a`
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--background);
  box-shadow: var(--largeDarkShadow);
  margin: 0 1rem;
  height: 50px;
  width: 50px;

  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: var(--largeDarkShadowHover);
    transform: translate(-2px, -1px);
  }

  &:active {
    box-shadow: var(--largeDarkShadowHover);
    transform: translate(1px, 2px);
  }

  img {
    width: 100%;
    height: 100%;
  }
`

const ContactLinks = () => {
  return (
    <ContactLinksContainer>
      <ContactLink
        href='https://www.linkedin.com/in/nick-de-waal-279036221/'
        rel='noreferrer'
        target='_blank'
      >
        <img src={linkedin} alt='linkedin' />
      </ContactLink>
      <ContactLink
        href='https://github.com/booklvr'
        rel='noreferrer'
        target='_blank'
      >
        <img src={github} alt='github' />
      </ContactLink>
      <ContactLink
        href='mailto:nick.a.dewaal@gmail.com'
        rel='noreferrer'
        target='_blank'
      >
        <img src={gmail} alt='gmail' />
      </ContactLink>
    </ContactLinksContainer>
  )
}

export default ContactLinks
