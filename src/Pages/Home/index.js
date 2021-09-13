// This is home page, It will contain all the sections required in this page
import React, { useState } from 'react'
import HeroSection from '../../Sections/Hero'
import ProjectSection from '../../Sections/Projects'
import ContactSection from '../../Sections/Contact'
import AboutSkillsSections from '../../Sections/AboutSkills'
import TestimonialsSection from '../../Sections/Testimonials'

import styled from 'styled-components/macro'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Container = styled.div`
  /* margin-top: 80px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background);
  /* overflow: hidden; */

  padding: 0 calc(5rem + 5vw) 2rem;

  @media only Screen and (max-width: 48em) {
    padding: 0 2rem;
  }
`

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container isOpen={isOpen} id='home'>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <HeroSection />
      <AboutSkillsSections />
      <ProjectSection />
      <TestimonialsSection />
      <ContactSection />
    </Container>
  )
}

export default Home
