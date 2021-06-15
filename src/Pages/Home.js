// This is home page, It will contain all the sections required in this page
import HeroSection from '../Sections/Hero'
import AboutSection from '../Sections/About'
import ServicesSection from '../Sections/Services'
import ProjectSection from '../Sections/Projects'
import ContactSection from '../Sections/Contact'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
    </Container>
  )
}

export default Home
