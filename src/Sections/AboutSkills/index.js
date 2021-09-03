import styled from 'styled-components/macro'
import AboutSection from '../About'
import Skills from '../Skills'

import React from 'react'

const AboutSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  /* min-height: 50vh; */
  padding-top: 5rem;

  /* background-color: pink; */

  @media only Screen and (max-width: 62em) {
    flex-direction: column;
  }
`

const AboutSkillsSections = () => {
  return (
    <AboutSkillsContainer>
      <AboutSection />
      <Skills />
    </AboutSkillsContainer>
  )
}

export default AboutSkillsSections
