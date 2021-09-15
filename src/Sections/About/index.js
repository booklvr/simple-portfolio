import React from 'react'
import styled from 'styled-components/macro'

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only Screen and (max-width: 64em) {
    align-items: center;
    padding-top: 2rem;
  }
`

const AboutHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: var(--tlShadow), var(--brShadow);
  color: var(--background);
  margin-bottom: 3rem;

  @media only Screen and (max-width: 42em) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`

const AboutText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only Screen and (max-width: 48em) {
    width: 80vw;
  }
`

const Text = styled.p`
  line-height: 1.75;
  font-size: 1.2rem;
  color: var(--fontMedium);

  @media only Screen and (max-width: 48em) {
    font-weight: 300;
    color: var(--black);
    font-size: 0.9rem;
  }
`

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <AboutHeader>About</AboutHeader>
      <AboutText>
        <Text>
          Hello. My Name is a Nick. I am a Full Stack Engineer.  I'm passionate about code and creating innovative solutions to problems.  I strive to develop quality code on time, every time.  I love the challenge of working on bespoke features for a web project.  Send me a message, and let's find out if I am the right fit for your company.
        </Text>
      </AboutText>
    </AboutContainer>
  )
}

export default AboutSection

