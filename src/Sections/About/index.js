import React from 'react'
import styled, { keyframes } from 'styled-components'
import wave from '../../assets/wave.svg'
import wavebot1 from '../../assets/wavebot1.svg'
import sittingMan from '../../assets/sittingMan.svg'
import sphere from '../../assets/sphere.svg'
import standingMan from '../../assets/standingMan.svg'

const AboutContainer = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  /* padding: 12.25px 0; */
  min-height: 90vh;
  background: rgb(239, 247, 249);
  background: linear-gradient(
    120deg,
    rgba(239, 247, 249, 1) 0%,
    rgba(210, 224, 228, 1) 100%
  );

  @media only Screen and (max-width: 48em) {
    min-height: 70vh;
  }
`

const WaveTop = styled.img`
  width: 100%;
  /* position: absolute; */
  /* top: -1px; */
`

const WaveBottom = styled.img`
  width: 100%;
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

const Man = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(5rem + 5vw);
  width: 20%;
  z-index: 10;
`

const Sphere = styled.div`
  position: absolute;
  width: 45vw;
  max-width: calc(30rem + 5vw);
  right: -5rem;
  /* top: 40%; */
  bottom: 0;
  /* left: 70%; */
  opacity: 50%;

  z-index: 10;

  @media only Screen and (max-width: 48em) {
    width: calc(50vw);
  }

  @media only Screen and (max-width: 40em) {
    width: calc(60vw);
  }
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

  @media only Screen and (max-width: 48em) {
    font-size: calc(2rem + 2vw);
  }
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
  justify-content: flex-end;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  z-index: 11;
  padding-top: 10rem;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    padding: calc(3rem + 3vw);
    padding-bottom: 2;
  }
`

const AboutText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(45vw);

  @media only Screen and (max-width: 48em) {
    width: 80vw;
  }
`

const Text = styled.h4`
  font-size: calc(0.6rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
  font-weight: 600;

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

  @media only Screen and (max-width: 48em) {
    display: none;
  }
`

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <Human>
        <img src={sittingMan} alt='sitting man' />
      </Human>
      <Sphere>
        <img src={sphere} alt='sphere' />
      </Sphere>
      <Man>
        <img src={standingMan} alt='man' />
      </Man>
      <WaveTop src={wave} alt='wave' width='400'></WaveTop>

      <Main>
        <TitleContainer>
          <Title>About Me</Title>
          <CurvedLine />
        </TitleContainer>
        <AboutText>
          <Text>
            Hello.  My Name is a Nick.  Over the past 5 years coding has developed into a passion of mine, specifically in the realm of web development and the creation of web apps.  As an English teacher I have used my passion for code to create fun and interactive web apps for my students and colleagues and now I would like to pursue web development full time.  I am dedicating myself to bettering myself as a developer and problem solver.   
            
          </Text>
          <div>
            <Square style={{ backgroundColor: 'var(--purple)' }} />
            <Square style={{ backgroundColor: 'var(--grey)' }} />
            <Square style={{ backgroundColor: 'var(--black)' }} />
          </div>
        </AboutText>
      </Main>
      <WaveBottom src={wavebot1} alt='wave' width='400'></WaveBottom>
    </AboutContainer>
  )
}

export default AboutSection


            // I am here to help you or your company develop your digital presence
            // in an increasingly competitive world. I want to work with you and to
            // help you to introduce yourself, to grow, and to stand out by
            // building a creative website together. I am here to make your vision
            // become reality.