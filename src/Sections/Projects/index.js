import React from 'react'
import styled from 'styled-components'
import sitOnLedge from '../../assets/sitOnLedge.svg'
import sitOnLedgeLong from '../../assets/sitOnLedgeLong.svg'

const ProjectsContainer = styled.div`
  min-height: calc(30rem + 50vw);
  width: 100vw;
  /* min-height: 80vh; */
  background-color: var(--black);

  position: relative;
  display: flex;
  /* padding: calc(10rem + 15vw) 0 calc(2rem + 5vw) 0; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: white;
  /* margin-top: -1rem; */
`

const SitOnLedge = styled.div`
  position: absolute;
  width: 125vw;
  height: auto;
  left: -calc(10rem + 10vw);
  top: 10rem;

  /* max-width: 40rem; */
  bottom: calc(2rem + 5vw);
  /* transform: translateY(-50%); */
`

const Main = styled.div``

const TitleContainer = styled.div`
  position: absolute;
  right: 20vw;
  top: 10vw;

  @media only Screen and (max-width: 48em) {
    position: static;
    /* left: 50%;
    transform: translateX(-50%); */
  }
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

const ProjectSection = () => {
  return (
    <ProjectsContainer>
      <SitOnLedge>
        <img src={sitOnLedgeLong} alt='man on ledge' />
      </SitOnLedge>
      <Main>
        <TitleContainer>
          <Title>Projects</Title>
          <CurvedLine />
        </TitleContainer>
      </Main>
    </ProjectsContainer>
  )
}

export default ProjectSection
