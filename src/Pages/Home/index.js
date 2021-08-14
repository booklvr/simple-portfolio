// This is home page, It will contain all the sections required in this page
import React, { useState } from 'react'
import HeroSection from '../../Sections/Hero'
import AboutSection from '../../Sections/About'
import SkillsSection from '../../Sections/Skills'
import ProjectSection from '../../Sections/Projects'
import ContactSection from '../../Sections/Contact'

import styled from 'styled-components/macro'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  padding: 0 calc(5rem + 5vw);
  background: rgb(239, 247, 249);
  background: linear-gradient(
    120deg,
    rgba(195, 214, 233, 0.5) 0%,
    rgba(249, 249, 249, 0.5) 50%,
    rgba(195, 214, 233, 0.5) 100%
  );

  @media only Screen and (max-width: 48em) {
    margin: 0 2rem;
  }
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
      <SkillsSection />

      <ContactSection />
    </Container>
  )
}

export default Home
