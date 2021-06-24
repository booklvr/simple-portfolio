// This is the services section.  It details the possible services offered
import styled from 'styled-components'

const ServicesContainer = styled.div`
  background-color: var(--black);
  width: 100%;
`

const Title = styled.h1`
  color: var(--white);
`

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <Title>Sections</Title>
    </ServicesContainer>
  )
}

export default ServicesSection
