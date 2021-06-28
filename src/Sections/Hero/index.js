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
  width: 100vw;
  height: 60vw;

  background-color: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;


  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }

  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`

// const Blobs = styled.div`
//   width: 100%;
//   position: absolute;
//   right: 0;

//   @media only Screen and (max-width: 48em) {
//     opacity: 0.5;
//   }
// `

// const GreyBlob = styled.div`
//   width: calc(12% + 12vw);
//   position: absolute;
//   right: calc(10rem + 5vw);
//   top: calc(5rem + 5vw);
//   z-index: 7;
// `

// const WhiteBlob = styled.div`
//   width: calc(15% + 15vw);
//   position: absolute;
//   right: calc(2rem + 2vw);
//   top: calc(2rem + 2vw);
//   z-index: 5;
// `

// const PurpleBlob = styled.div`
//   width: calc(15% + 15vw);
//   position: absolute;
//   right: calc(4rem + 4vw);
//   top: calc(3rem + 3vw);
//   z-index: 6;
//   opacity: 0.8;
// `

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
    width: 80%;
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
`

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: var(--purple);
  margin-right: 0.5rem;
`

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`

const Subtext = styled.h5`
  font-size: calc(0.5rem + 0.5rem);
  color: var(--nav2);
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
    bottom: 0;
    left: 2rem;
    opacity: 0.35;
  }

  @media only screen and (max-width: 40em) {
    display: none;
  }
`

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <MainContent>
        <LeftBlock>
          <Topic>
            <Circle /> <span>Full Stack Developer</span>
          </Topic>
          <Title>Transforming your digital presence</Title>
          <Subtext>
            I work with individuals and small businesses to develop online
            solutions
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
