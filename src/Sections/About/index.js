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
          Hello. My name is Nick.  I started to dabble in languages like C and Python nearly seven years ago but it wasn't until about three years ago that I became really serious about web development.  Everyday I improve my skills in React, Redux, and NodeJs.  I have several large projects under my belt and there are English teachers all over the world that use my websites every day.  I love learning new technologies and tackling new challenges.  I think this passion for learning could help me to hit the ground running if I were to join your team.  I'm all in.  I taught myself how to code while teaching English in Korea but I have since moved back to Canada so that I can focus 100% of my energy into my code and breaking into this industry.  
        </Text>
      </AboutText>
    </AboutContainer>
  )
}

export default AboutSection

