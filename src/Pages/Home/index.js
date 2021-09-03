// This is home page, It will contain all the sections required in this page
import React, { useState } from 'react'
import HeroSection from '../../Sections/Hero'
import ProjectSection from '../../Sections/Projects'
import ContactSection from '../../Sections/Contact'
import AboutSkillsSections from '../../Sections/AboutSkills'
import TestimonialsSection from '../../Sections/Testimonials'

import styled, { css } from 'styled-components/macro'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Container = styled.div`
  /* margin-top: 80px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background);

  padding: 0 calc(5rem + 5vw) 2rem;

  /* ${(props) =>
    props.isOpen &&
    css`
      overflow: hidden;
    `} */
  /* background: rgb(242, 245, 244);
  background: linear-gradient(
    180deg,
    rgba(195, 214, 233, 0.5) 0%,
    rgba(249, 249, 249, 0.8) 50%,
    rgba(195, 214, 233, 0.5) 100%
  ); */

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
    <Container isOpen={isOpen}>
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
