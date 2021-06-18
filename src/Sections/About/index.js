import React from 'react'
import styled from 'styled-components'
import wave from '../../assets/wave.svg'
import presentation from '../../assets/presentation.svg'

const AboutContainer = styled.div``

const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`
const Hand = styled.div``

const Main = styled.div``

const Title = styled.h1`
  display: inline-block;
`

const CurvedLine = styled.div``

const Content = styled.div``

const PresentationSVG = styled.div``

const AboutText = styled.div``

const Text = styled.div``

const Square = styled.div``

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <Waves src={wave} alt='wave' width='400'></Waves>
      <Main>
        <div>
          <Title>About Me</Title>
          <CurvedLine />
        </div>
        <Content>
          <PresentationSVG>
            <img src={presentation} alt='' />
          </PresentationSVG>
          <AboutText>
            <Text>
              I am here to help you or your company develop your digital
              presence in an increasingly competitive world. I want to work with
              you and to help you to introduce yourself, to grow, and to stand
              out by building a creative website together. I am here to make
              your vision become reality.
            </Text>
            <div>
              <Square style={{ backgroundColor: 'var(--purple)' }} />
              <Square style={{ backgroundColor: 'var(--grey)' }} />
              <Square style={{ backgroundColor: 'var(--black)' }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutContainer>
  )
}

export default AboutSection
