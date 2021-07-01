// This is the services section.  It details the possible services offered
import styled from 'styled-components'
import wave3 from '../../assets/wave3.svg'
import wave2 from '../../assets/wave2.svg'
import wave4 from '../../assets/wave4.svg'
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
  /* background-color: var(--black); */
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
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 9;

  /* transform: rotateY(180deg); */
  /* position: absolute; */
  /* top: -1px; */
`

const WaveBottom = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 9;
`

const ServiceSection = styled.div`
  height: calc(2rem + 45vw);
  height: 44.4vw;
  width: 100%;
  position: relative;
  border: 1px solid orange;

  background: rgb(239, 247, 249);
  background: linear-gradient(
    120deg,
    rgba(239, 247, 249, 1) 0%,
    rgba(210, 224, 228, 1) 100%
  );
  background: pink;
`

const TextContainerOne = styled.div`
  position: absolute;
  left: 22vw;
  top: 50%;
  height: 10vw;
  width: 23vw;
  transform: translateY(-50%);
`

const Text = styled.div`
  width: 100%;
  height: 100%;
  font-size: calc(0.5rem + 1vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <Sphere>
        <img src={sphere} alt='sphere' />
      </Sphere>

      <ServiceSection>
        <WaveTop src={wave3} alt='wave' width='400'></WaveTop>
        <LayingDown>
          <img src={layingDown} alt='sitting man' />
        </LayingDown>
        <TextContainerOne>
          <Text>
            Working with the best designers to bring you creative and designs.
          </Text>
        </TextContainerOne>

        <WaveBottom src={wave2} alt='wave2' width='400'></WaveBottom>
      </ServiceSection>
      <ServiceSection>
        <WaveTop src={wave4} alt='wave' width='400'></WaveTop>
        <WaveBottom src={wave2} alt='wave2' width='400'></WaveBottom>
      </ServiceSection>
      <ServiceSection>
        <WaveTop src={wave3} alt='wave' width='400'></WaveTop>
        <WaveBottom src={wave2} alt='wave2' width='400'></WaveBottom>
      </ServiceSection>
    </ServicesContainer>
  )
}

export default ServicesSection
