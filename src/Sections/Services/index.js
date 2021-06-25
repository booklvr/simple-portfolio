// This is the services section.  It details the possible services offered
import styled from 'styled-components'
import wave3 from '../../assets/wave3.svg'
import wave2 from '../../assets/wave2.svg'

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--black);
  width: 100%;
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

const Main = styled.div``

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <WaveTop src={wave3} alt='wave' width='400'></WaveTop>
      <Main>Sections</Main>
      <WaveBottom src={wave2} alt='wave2' width='400'></WaveBottom>
    </ServicesContainer>
  )
}

export default ServicesSection
