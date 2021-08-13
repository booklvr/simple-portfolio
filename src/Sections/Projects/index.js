import React from 'react'
import styled from 'styled-components'
import sitOnLedgeLong from '../../assets/sittingOnLedgeLongest.svg'
// import Slider from 'react-slick'
import Card from '../../components/Card'

import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--black);
  color: white;
`

const TitleContainer = styled.div`
  margin-top: 3rem;
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
const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 1rem;

  @media only Screen and (max-width: 120em) {
    flex-direction: column;
  }
`

const ProjectCardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
  }
`

const ProjectSection = () => {
  return (
    <ProjectsContainer id='projects'>
      <TitleContainer>
        <Title>Projects</Title>
        <CurvedLine />
      </TitleContainer>
      <ProjectCardContainer>
        <ProjectCardRow>
          <Card
            title='Classpoint'
            text='Classpoint helps teachers to keep track of their students points for classroom games.  Classlists are saved, and games can be set up as individual games, team games, or boys vs girls.'
            image='classpoint_thumbnail'
            link='https://classpoint.ca'
            git='https://github.com/booklvr/class_point2'
          />
          <Card
            title='Scategories'
            text='Scattergories is a creative-thinking category-based game.  The objective is to score points by uniquely naming objects within a set of categories, given an initial letter, within a time limit.'
            image='scategories_thumbnail'
            link='https://scategories.classpoint.ca'
            git='https://github.com/booklvr/scategories-esl'
          />
        </ProjectCardRow>
        <ProjectCardRow>
          <Card
            title='SpeedQuiz'
            text='This site facilitates a charades type game, intended for English students.  Students are given a list of words and they must help their teammates guess as many words as possible within a time limit, without saying the word.'
            image='speedquiz_thumbnail'
            link='https://speedquiz.classpoint.ca'
            git='https://github.com/booklvr/speedQuiz'
          />
          <Card
            title='ConnectFour'
            text='This site uses connect four, a tic-tac-toe-like game in which players alternately place pieces on a vertical board where the first player to achieve a line of four connected pieces wins the game.  It is adapted as a tool to teach English as students must call out some target language to choose their column.'
            image='connectfour_thumbnail'
            link='https://connectfour.classpoint.ca'
            git='https://github.com/booklvr/connectFour'
          />
        </ProjectCardRow>
      </ProjectCardContainer>
    </ProjectsContainer>
  )
}

export default ProjectSection

// <SitOnLedge>
//   <img src={sitOnLedgeLong} alt='man on ledge' />
// </SitOnLedge>
