import React from 'react'
import styled, { keyframes } from 'styled-components'

import Arrow from '../../assets/arrowRight.svg'
// import Grey from '../../assets/grey-blob.svg'
// import White from '../../assets/white-blob.svg'
// import Purple from '../../assets/purple-blob.svg'
import Developer from '../../assets/developer2.svg'

const move = keyframes`
  0% {transform: translateY(-5px); }
  50% { transform: translateY(10px);}
100% {transform: translateY(-5px);}
`

const HeroContainer = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 80px);
  background-color: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;

  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
    padding: 5rem 0;
  }

  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  padding: 0 calc(5rem + 5vw);

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;

  @media only Screen and (max-width: 48em) {
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px var(--black));
  }
`

const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav);
  font-weight: 700;
  padding: 0.5rem 1rem;
  font-size: calc(0.4rem + 0.4vw);
  color: var(--fontLight);
`

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  color: var(--fontMain);
`

const Subtext = styled.h5`
  font-size: calc(0.5rem + 0.5rem);
  color: var(--nav2);

  @media only Screen and (max-width: 40em) {
    margin: 2rem 0;
  }
`

const CTA = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 0;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  img {
    width: 1.5rem;
  }

  @media only Screen and (max-width: 48em) {
    position: absolute;
    right: 0;
    bottom: calc(-8rem + -4vw);
  }

  @media only Screen and (max-width: 40rem) {
    position: static;
    right: none;
    bottom: none;
  }
`

const DeveloperSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  z-index: 7;
  height: auto;
  animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 10rem;
    left: 2rem;
    opacity: 0.35;
  }

  @media only Screen and (max-width: 44em) {
    bottom: 2rem;
  }

  @media only screen and (max-width: 40em) {
    opacity: 0.125;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: none;
    /* top: 50%; */
    /* transform: translateY(-50%); */
    width: 100%;
  }
`

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <MainContent>
        <LeftBlock>
          <Title>Full Stack Developer</Title>
          <Subtext>
            I work with individuals and small businesses to develop online
            solutions.
          </Subtext>
          <CTA>
            Get in touch &nbsp; <img src={Arrow} alt='CTA' width='400' />
          </CTA>
        </LeftBlock>
        <DeveloperSvg src={Developer} alt='Mobile Svg' width='400' />
      </MainContent>
    </HeroContainer>
  )
}

export default HeroSection

// <Topic>
//   <Circle /> <span>Full Stack Developer</span>
// </Topic>
