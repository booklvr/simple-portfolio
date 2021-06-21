import React from 'react'
import styled, { keyframes } from 'styled-components'
import wave from '../../assets/wave.svg'
import presentation from '../../assets/presentation.svg'
import creationProcess from '../../assets/creation_process.svg'
import sittingMan from '../../assets/sitting_man.svg'

const move = keyframes`
  0%{transform: translateY(-5px)}
  50%{transform: translateY(10px) translateX(10px)}
  100%{transform: translateY(-5px)}}
`

const AboutContainer = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: calc(10rem + 10vw);

  /* @media only Screen and (min-width: 80em) {
    margin-top: 20rem;
  } */

  @media only Screen and (max-width: 49em) {
    margin-top: calc(5rem + 5vw);
  }
`

const Main = styled.div`
  /* margin: 0 5rem; */
  /* margin-top: calc(10rem + 15vw); */
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only Screen and (max-width: 48em) {
    margin-top: -1rem;
    margin-left: 2rem;
  }
`

const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
`

const CurvedLine = styled.div`
  width: 9rem;
  height: 2rem;
  border: 5px solid var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 200% / 80px 110px 0 0;
`

const Content = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-width: 80vw; */

  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  } */
`

const CreationProcessSVG = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  align-items: center;
  animation: ${move} 2.5s ease infinite;
  margin-right: 5rem;
  margin-top: 2rem;
`

const AboutText = styled.div`
  position: relative;
  width: 50vw;

  padding-bottom: 5rem;

  @media only Screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Human = styled.div`
  width: 50%;

  @media only Screen and (max-width: 48em) {
    margin-left: 3rem;
  }
`

const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
  margin-top: 2rem;
  padding-right: 5rem;
`

const Square = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: var(--black);
  margin-right: 0.5rem;
  margin-top: 1rem;
`

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <Waves src={wave} alt='wave' width='400'></Waves>
      <LeftSection>
        <div>
          <Title>About Me</Title>
          <CurvedLine />
        </div>
        <CreationProcessSVG>
          <img src={creationProcess} alt='' />
        </CreationProcessSVG>
      </LeftSection>
      <Main>
        <Content>
          <AboutText>
            <Human>
              <img src={sittingMan} alt='sitting man' />
            </Human>
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
