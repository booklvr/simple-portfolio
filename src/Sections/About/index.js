import React from 'react'
import styled, { keyframes } from 'styled-components'
import wave from '../../assets/wave.svg'
import wave2 from '../../assets/wave2.svg'
import app from '../../assets/app.svg'
import presentation from '../../assets/presentation.svg'
import creationProcess from '../../assets/creation_process.svg'
import sittingMan from '../../assets/sitting_man.svg'
import sphere from '../../assets/sphere.svg'

const AboutContainer = styled.div`
  width: 100vw;
  position: relative;
  display: block;
  justify-content: center;
  background: rgb(239, 247, 249);
  overflow: hidden;
  padding: 12.25px 0;
  min-height: 75vh;

  background: linear-gradient(
    120deg,
    rgba(239, 247, 249, 1) 0%,
    rgba(210, 224, 228, 1) 100%
  );

  /* @media only Screen and (max-width: 48em) {
    min-height: 40rem;
  } */
`

const WaveTop = styled.img`
  width: 100%;
  position: absolute;
  top: -1px;
`

const WaveBottom = styled.img`
  width: 100%;
  position: absolute;
  bottom: -3;
  z-index: 9;
`

const Human = styled.div`
  position: absolute;
  top: 0;
  right: calc(7rem + 14vw);
  width: 25%;
  z-index: 10;

  @media only Screen and (max-width: 48em) {
    right: calc(7rem + 5vw);
  }

  @media only Screen and (max-width: 40em) {
    right: calc(3rem + 5vw);
  }
`

const Sphere = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  /* top: 40%; */
  bottom: 10%;
  /* left: 70%; */
  opacity: 50%;

  z-index: 10;
  /* img {
    width: 100%;
  } */
`

const TitleContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  @media only Screen and (max-width: 48em) {
    position: static;
    /* left: 50%;
    transform: translateX(-50%); */
  }
`

const Title = styled.h1`
  font-size: calc(3rem + 1vw);
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
  align-items: center;
  width: 70vw;
  margin: 0 auto;
  padding-top: calc(12rem + 12vw);
  position: relative;
  z-index: 11;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
  }
`

const AboutText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media only Screen and (max-width: 48em) {
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
      <Human>
        <img src={sittingMan} alt='sitting man' />
      </Human>
      <Sphere>
        <img src={sphere} alt='' />
      </Sphere>
      <WaveTop src={wave} alt='wave' width='400'></WaveTop>

      <Main>
        <TitleContainer>
          <Title>About Me</Title>
          <CurvedLine />
        </TitleContainer>
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
      <WaveBottom src={wave2} alt='wave2' width='400'></WaveBottom>
    </AboutContainer>
  )
}

export default AboutSection
