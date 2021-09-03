import React from 'react'
import styled from 'styled-components/macro'

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only Screen and (max-width: 48em) {
    align-items: center;
  }
`

const AboutHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: var(--black);
  margin-bottom: 1rem;
  

  @media only Screen and (max-width: 42em) {
    font-size: 2.5rem;
  }
`

const AboutSubHeader = styled.h4`
  color: var(--fontMedium);
  font-size: 1.2rem;
  text-transform: lowercase;
  border-bottom: 3px solid var(--primary);
  margin-bottom: 1rem;
`

const AboutText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only Screen and (max-width: 48em) {
    width: 80vw;
  }
`

const Text = styled.p`
  font-size: calc(0.6rem + 0.6vw);
  line-height: 1.75;
  color: var(--nav2);
  font-weight: 600;

  @media only Screen and (max-width: 48em) {
    color: var(--black);
    line-height: 2;
  }
  /* margin-top: 2rem; */
`

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <AboutHeader>About</AboutHeader>
      <AboutText>
        <Text>
          Hello. My Name is a Nick. Over the past 5 years coding has developed
          into a passion of mine, specifically in the realm of web development
          and the creation of web apps. I honed my as skills an English teacher,
          where I built fun and interactive web apps for my students and
          colleagues. I now develop full time and am looking for my next
          project.
        </Text>
      </AboutText>
    </AboutContainer>
  )
}

export default AboutSection

// I am here to help you or your company develop your digital presence
// in an increasingly competitive world. I want to work with you and to
// help you to introduce yourself, to grow, and to stand out by
// building a creative website together. I am here to make your vision
// become reality.

// <Human>
//   <img src={sittingMan} alt='sitting man' />
// </Human>

// <Man>
//         <img src={standingMan} alt='man' />
//       </Man>

// <div>
//   <Square style={{ backgroundColor: 'var(--purple)' }} />
//   <Square style={{ backgroundColor: 'var(--grey)' }} />
//   <Square style={{ backgroundColor: 'var(--black)' }} />
// </div>

// <WaveTop src={wave} alt='wave' width='400'></WaveTop>
// <WaveBottom src={wavebot1} alt='wave' width='400'></WaveBottom>

// <Sphere>
//         <img src={sphere} alt='sphere' />
//       </Sphere>

// const Square = styled.div`
//   display: inline-block;
//   width: 1rem;
//   height: 1rem;
//   background-color: var(--black);
//   margin-right: 0.5rem;
//   margin-top: 1rem;

//   @media only Screen and (max-width: 48em) {
//     display: none;
//   }
// `

// <CurvedLine />
