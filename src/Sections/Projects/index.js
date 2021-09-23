import React from 'react'
import styled from 'styled-components/macro'

import Card from '../../components/Card'
import CardVertical from '../../components/CardVertical'

import projectData from './data'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
  margin-top: 5rem;

  @media only Screen and (max-width: 64em) {
    margin-top: 0rem;
  }

  @media only Screen and (max-width: 42em) {
    margin-bottom: 4.5rem;
    /* padding-top: 1.5rem; */
  }
`

const ProjectsHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: var(--tlShadow), var(--brShadow);
  color: var(--background);

  @media only Screen and (max-width: 42em) {
    font-size: 4rem;
  }
  @media only Screen and (max-width: 40em) {
    font-size: 3.5rem;
  }
`

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  /* margin: 1rem; */
  /* margin-top: 3rem; */

  @media only Screen and (max-width: 62em) {
    flex-direction: column;
  }
`



const ProjectSection = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsHeader>Projects</ProjectsHeader>
      <ProjectCardContainer>
        {projectData.map(({ title, text, image, video, git, tags }, index) => (
          <Card
            reverse={index % 2 === 0 && 'row-reverse'}
            title={title}
            text={text}
            image={image}
            video={video}
            git={git}
            tags={tags}
          ></Card>
        ))}
        {projectData.map(({ title, text, image, video, git, tags }, index) => (
          <CardVertical
            title={title}
            text={text}
            image={image}
            video={video}
            git={git}
            tags={tags}
          ></CardVertical>
        ))}
      </ProjectCardContainer>
    </ProjectsContainer>
  )
}

export default ProjectSection
