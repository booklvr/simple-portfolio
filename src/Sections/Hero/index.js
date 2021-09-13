import React from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { Link as LinkS } from 'react-scroll'

import coding from '../../assets/coding.svg'

const move = keyframes`
  0% {transform: translateY(-5px); }
  50% { transform: translateY(10px);}
100% {transform: translateY(-5px);}
`

const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin-top: -80px; */
  padding: 0 calc(5rem + 5vw);

  &::before {
    content: '';
    width: 100%;
    height: 80px;
    margin-top: -80px;
    position: absolute;
    background-color: var(--black);
  }

  @media only Screen and (max-width: 64em) {
    margin-top: -2rem;
    padding: 0 2rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  line-height: 1.5;

  @media only screen and (max-width: 64em) {
    width: 100%;
    align-items: center;
    padding: 2rem 0;
    margin-top: 2rem;
  }

  @media only Screen and (max-width: 48em) {
    width: 100%;
  }
`

const HelloText = styled.h4`
  color: var(--primary);
  font-size: 1.2rem;
  text-transform: lowercase;
`

const TitleNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media only Screen and (max-width: 64em) {
    justify-content: center;
  }
`

const TitleLine = styled.div`
  display: block;
  background-color: white;
  width: 3rem;
  height: 0.125rem;
  margin-right: 1rem;
`

const TitleLineLeft = styled(TitleLine)`
  display: none;
  margin-left: 1rem;
  margin-right: 0;
  @media only Screen and (max-width: 64em) {
    display: block;
  }
`

const TitleName = styled.h3`
  font-size: 1.75rem;
  font-weight: 300;
  padding: 0.5rem 0;

  @media only Screen and (max-width: 40em) {
    font-size: 1.3rem;
  }
`

const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 1.2;
  color: var(--fontMain);

  @media only Screen and (max-width: 64em) {
    text-align: center;
    font-size: 3rem;
  }

  @media only Screen and (max-width: 48em) {
    font-size: 2.5rem;
  }
`

const Subtext = styled.h5`
  font-size: 1rem;
  color: var(--nav2);

  @media only Screen and (max-width: 64em) {
    text-align: center;
  }

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`

const CTA = styled(LinkS)`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-out;
  background-color: var(--primary);
  margin-top: 1rem;

  &:hover {
    color: white;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  @media only Screen and (max-width: 48em) {
    font-size: 1.2rem;
    width: 10rem;
    padding: 0.5rem 0;
  }
`

const DeveloperSvg = styled.img`
  width: 50%;
  z-index: 7;
  height: auto;
  animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 64em) {
    width: 60vw;
    opacity: 0.8;
  }
`

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <MainContent>
        <HelloText>Hello I am</HelloText>
        <TitleNameContainer>
          <TitleLine />
          <TitleName>Nick de Waal</TitleName>
          <TitleLineLeft />
        </TitleNameContainer>
        <Title>Full Stack Developer</Title>
        <Subtext>
          I am passionate about clean code and innovative solutions.
        </Subtext>
        <CTA to='contact' offset={-140}>
          Contact
        </CTA>
      </MainContent>
      <DeveloperSvg src={coding} alt='Mobile Svg' />
    </HeroContainer>
  )
}

export default HeroSection

// <Topic>
//   <Circle /> <span>Full Stack Developer</span>
// </Topic>
