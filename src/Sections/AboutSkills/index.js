import styled from 'styled-components/macro'
import AboutSection from '../About'
import Skills from '../Skills'

import React from 'react'

const AboutSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: calc(100vh - 5rem);
  /* padding-bottom: 10rem; */

  @media only Screen and (max-width: 64em) {
    flex-direction: column;
    height: revert;
    padding-top: 5rem;
    padding-bottom: 8.5rem;
  }
`

const AboutSkillsSections = () => {
  return (
    <AboutSkillsContainer id='about'>
      <AboutSection />
      <Skills />
    </AboutSkillsContainer>
  )
}

export default AboutSkillsSections
