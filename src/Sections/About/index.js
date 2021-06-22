import React from 'react'
import styled, { keyframes } from 'styled-components'
import wave from '../../assets/wave.svg'
import app from '../../assets/app.svg'
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
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10rem;
  background: rgb(239, 247, 249);
  background: linear-gradient(
    120deg,
    rgba(239, 247, 249, 1) 0%,
    rgba(210, 224, 228, 1) 100%
  );

  @media only Screen and (max-width: 48em) {
    min-height: 40rem;
  }
`

const WaveTop = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`

const WaveBottom = styled.img`
  width: 100%;
  position: absolute;
  bottom: -1rem;
`

const Human = styled.div`
  position: absolute;
  top: 0;
  right: calc(7rem + 14vw);
  width: 25%;

  @media only Screen and (max-width: 48em) {
    right: calc(7rem + 5vw);
  }

  @media only Screen and (max-width: 40em) {
    right: calc(3rem + 5vw);
  }
`

const TitleContainer = styled.div`
  position: absolute;
  left: calc(5rem + 8vw);
  top: calc(9rem + 13vw);

  @media only Screen and (max-width: 52em) {
    left: 50%;
    transform: translateX(-50%);
  }
`

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
`

const CurvedLine = styled.div`
  width: 9rem;
  height: 2rem;
  border: 5px solid var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 200% / 80px 110px 0 0;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 70vw;
  margin-top: calc(12rem + 25vw);
  position: relative;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: calc(2rem + 5vw);
  min-width: calc(40% + 10vw);
`

const CreationProcessSVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 48em) {
    position: absolute;
    margin-top: 9rem;
    opacity: 80%;
    padding: 0;
    max-width: 50vw;
  }

  @media only Screen and (max-width: 40em) {
    margin-top: 10rem;
    opacity: 60%;
    padding: 0;
    max-width: 60vw;
  }
`

const AboutText = styled.div`
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;

  @media only Screen and (max-width: 48em) {
    width: 80vw;
    padding-bottom: 25rem;
    padding-right: 0;
  }

  @media only Screen and (max-width: 40em) {
    width: 80vw;
    padding-bottom: 15rem;
    padding-right: 0;
  }
`

const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);

  @media only Screen and (max-width: 48em) {
    color: var(--black);
    line-height: 2;
  }
  /* margin-top: 2rem; */
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
      <WaveTop src={wave} alt='wave' width='400'></WaveTop>
      <WaveBottom src={wave} alt='wave2' width='400'></WaveBottom>
      <Human>
        <img src={sittingMan} alt='sitting man' />
      </Human>
      <TitleContainer>
        <Title>About Me</Title>
        <CurvedLine />
      </TitleContainer>
      <Main>
        <LeftSection>
          <CreationProcessSVG>
            <img src={app} alt='' />
          </CreationProcessSVG>
        </LeftSection>

        <AboutText>
          <Text>
            I am here to help you or your company develop your digital presence
            in an increasingly competitive world. I want to work with you and to
            help you to introduce yourself, to grow, and to stand out by
            building a creative website together. I am here to make your vision
            become reality.
          </Text>
          <div>
            <Square style={{ backgroundColor: 'var(--purple)' }} />
            <Square style={{ backgroundColor: 'var(--grey)' }} />
            <Square style={{ backgroundColor: 'var(--black)' }} />
          </div>
        </AboutText>
      </Main>
    </AboutContainer>
  )
}

export default AboutSection
