// This is home page, It will contain all the sections required in this page
import React, { useState } from 'react'
import HeroSection from '../../Sections/Hero'
import AboutSection from '../../Sections/About'
import ServicesSection from '../../Sections/Services'
import ProjectSection from '../../Sections/Projects'
import ContactSection from '../../Sections/Contact'

import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black);
`

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />

      <ContactSection />
    </Container>
  )
}

export default Home
