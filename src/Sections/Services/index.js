// This is the services section.  It details the possible services offered
import styled from 'styled-components'
import wavetop1 from '../../assets/wavetop1.svg'
import wavebot1 from '../../assets/wavebot1.svg'
import wave4 from '../../assets/wave4.svg'
import wavebot2 from '../../assets/wavebot2.svg'
import wavebot3 from '../../assets/wavebot3.svg'
import wavebot4 from '../../assets/wavebot4.svg'
import wavebot5 from '../../assets/wavebot5.svg'
import wavetop3 from '../../assets/wavetop3.svg'
import wavetop4 from '../../assets/wavetop4.svg'
import wavetop5 from '../../assets/wavetop5.svg'
import layingDown from '../../assets/layingDown.svg'
import standWithLaptop from '../../assets/standWithLaptop.svg'
import sitFrontFace from '../../assets/sitFrontFace.svg'
import sphere from '../../assets/sphere.svg'

const ServicesContainer = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  /* padding: 12.25px 0; */
  /* min-height: 60vh; */
  /* background-color: var(--black); */
  background: rgb(239, 247, 249);
  background: linear-gradient(
    120deg,
    rgba(239, 247, 249, 1) 0%,
    rgba(210, 224, 228, 1) 100%
  );

  /* @media only Screen and (max-width: 48em) {
    min-height: 70vh;
  } */
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

const StandWithLaptop = styled.div`
  position: absolute;
  top: 2.8vw;
  right: 6vw;
  width: 26%;
  z-index: 10;
  /* height: 100 */
  /* background-color: pink; */
`

const SitFrontFace = styled.div`
  position: absolute;
  top: 5.5vw;
  right: 50vw;
  width: 25%;
  z-index: 10;
  height: 80%;
  transform: translateX(50%);
  img {
    height: 50%;
  }
`

const Sphere = styled.div`
  position: absolute;
  width: calc(35vw);

  opacity: 70%;

  z-index: 10;
  display: none;

  @media only Screen and (max-width: 48em) {
    width: calc(30vw);
  }

  /* @media only Screen and (max-width: 40em) {
    width: calc(20vw);
  } */
`

const Sphere1 = styled(Sphere)`
  bottom: -10vw;
  left: -10vw;
`

const Sphere2 = styled(Sphere)`
  bottom: 0;
  right: -2vw;
`

const TitleContainer = styled.div`
  position: absolute;
  right: 34vw;
  z-index: 200;
  color: white;
  transform: translateX(50%);
  z-index: 1000;
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

const BlackBackground = styled.div`
  width: 100%;
  height: 11.2vw;
  background-color: var(--black);
`

const ServiceSection = styled.div`
  height: calc(2rem + 45vw);
  height: 55.6vw;
  width: 100%;
  position: relative;
  /* border: 1px solid orange; */

  background: rgb(239, 247, 249);
  background: linear-gradient(
    120deg,
    rgba(239, 247, 249, 1) 0%,
    rgba(210, 224, 228, 1) 100%
  );
  /* background: pink; */
`

const TextContainer = styled.div`
  position: absolute;

  height: 12vw;
  width: 35vw;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  background-color: orange;
`

const TextContainerOne = styled(TextContainer)`
  left: 15vw;
  top: 20vw;
`

const TextContainerTwo = styled(TextContainer)`
  right: 15vw;
  top: -5vw;
  z-index: 100;
  color: white;
`

const TextContainerThree = styled(TextContainer)`
  left: 15vw;
  top: 50%;
`

const Heading = styled.h4`
  font-size: calc(1rem + 1vw);
`

const Text = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  font-size: calc(0.5rem + 1vw);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: yellow;
`

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <TitleContainer>
        <Title>Skills</Title>
        <CurvedLine />
      </TitleContainer>

      <ServiceSection>
        <WaveTop src={wavetop1} alt='wave' width='400'></WaveTop>
        <LayingDown>
          <img src={layingDown} alt='sitting man' />
        </LayingDown>
        <TextContainerOne>
          <Heading>Design</Heading>
          <Text>
            I work with some incredible designers who are good at making
            designs. They are cool.
          </Text>
        </TextContainerOne>
        <StandWithLaptop>
          <img src={standWithLaptop} alt='standWithLaptop' />
        </StandWithLaptop>
        <Sphere1>
          <img src={sphere} alt='sphere' />
        </Sphere1>
        <WaveBottom src={wavebot4} alt='wave2' width='400'></WaveBottom>
      </ServiceSection>
      <BlackBackground />
      <ServiceSection>
        <TextContainerTwo>
          <Heading>Frontend</Heading>
          <Text>
            Using modern web frameworks like react, I will turn your design into
            a reality.
          </Text>
        </TextContainerTwo>
        <TextContainerThree>
          <Heading>Backend</Heading>
          <Text>My code is really cool you will like it!</Text>
        </TextContainerThree>
        <SitFrontFace>
          <img src={sitFrontFace} alt='sitting man' />
        </SitFrontFace>

        <WaveTop src={wavetop5} alt='wave' width='400'></WaveTop>
        <WaveBottom src={wavebot5} alt='wave2' width='400'></WaveBottom>
        <Sphere2>
          <img src={sphere} alt='sphere' />
        </Sphere2>
      </ServiceSection>
    </ServicesContainer>
  )
}

export default ServicesSection
