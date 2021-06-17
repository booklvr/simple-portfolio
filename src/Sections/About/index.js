import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div``

const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      {/* <Waves src={wave} alt='wave' width='400'></Waves> */}
    </AboutContainer>
  )
}

export default AboutSection
