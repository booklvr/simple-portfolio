// This is the services section.  It details the possible services offered
import styled from 'styled-components'
import wave3 from '../../assets/wave3.svg'
import wave2 from '../../assets/wave2.svg'
import layingDown from '../../assets/layingDown.svg'
import sphere from '../../assets/sphere.svg'

const ServicesContainer = styled.div`
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

const LayingDown = styled.div`
  position: absolute;
  top: 5px;
  left: 11vw;
  width: 25%;
  z-index: 10;

  /* img {
    transform: rotateY(180deg);
  } */

  @media only Screen and (max-width: 48em) {
    right: calc(7rem + 5vw);
  }

  @media only Screen and (max-width: 40em) {
    right: calc(3rem + 5vw);
  }
`

const Sphere = styled.div`
  position: absolute;
  /* width: 43vw; */
  width: calc(30rem + 5vw);
  left: -5rem;
  /* top: 40%; */
  bottom: 0;
  /* left: 70%; */
  opacity: 70%;

  z-index: 10;

  @media only Screen and (max-width: 48em) {
    width: calc(50vw);
  }

  @media only Screen and (max-width: 40em) {
    width: calc(60vw);
  }
`

// const Tube = styled.div`
//   position: absolute;
//   width: 50vw;
//   max-width: calc(28rem + 5vw);

//   /* top: 40%; */
//   left: -5rem;
//   bottom: 0;
//   /* left: 70%; */
//   opacity: 50%;

//   z-index: 10;

//   /* @media only Screen and (max-width: 48em) {
//     width: calc(50vw);
//   }

//   @media only Screen and (max-width: 40em) {
//     width: calc(60vw);
//   } */
// `

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

const WaveTop = styled.img`
  width: 100%;

  /* transform: rotateY(180deg); */
  /* position: absolute; */
  /* top: -1px; */
`

const WaveBottom = styled.img`
  width: 100%;
  z-index: 9;
`

const Main = styled.div``

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <LayingDown>
        <img src={layingDown} alt='sitting man' />
      </LayingDown>
      <Sphere>
        <img src={sphere} alt='sphere' />
      </Sphere>
      <WaveTop src={wave3} alt='wave' width='400'></WaveTop>
      <Main>Sections</Main>
      <WaveBottom src={wave2} alt='wave2' width='400'></WaveBottom>
    </ServicesContainer>
  )
}

export default ServicesSection
