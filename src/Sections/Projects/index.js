import React from 'react'
import styled from 'styled-components'
import sitOnLedgeLong from '../../assets/sittingOnLedgeLongest.svg'
import Slider from 'react-slick'
import Card from '../../components/Card'

import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

const ProjectsContainer = styled.div`
  width: 100vw;

  height: 55rem;
  background-color: var(--black);
  /* background-color: darkblue; */

  position: relative;

  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  overflow-x: hidden;

  color: white;
  /* margin-top: -1rem; */

  /* @media only Screen and (max-width: 48em) {
    min-height: calc(20rem + 60vw);
  } */
`

const SitOnLedge = styled.div`
  height: 40rem;
  top: 5rem;
  right: 3rem;
  position: absolute;

  /* background: white; */
  /* min-height: calc(20rem + 60vw); */

  width: 50%;

  img {
    position: absolute;
    height: 100%;
    width: auto;
    right: 5rem;
  }

  /* right: -5vw;
  top: 5rem; */

  /* max-width: 40rem; */
  /* bottom: calc(2rem + 5vw); */
  /* transform: translateY(-50%); */

  @media only Screen and (max-width: 80em) {
    right: 0;

    img {
      right: -2rem;
    }
  }
`

const TitleContainer = styled.div`
  position: absolute;
  right: 50%;
  top: 5rem;
  transform: translateX(50%);

  @media only Screen and (max-width: 48em) {
    left: 7rem;
    top: 3rem;
    transform: translateX(0);
  }

  @media only Screen and (max-width: 40em) {
    /* top: 3rem; */
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

const Carousel = styled.div`
  position: absolute;
  top: 14.5rem;
  left: 5rem;
  width: calc(100vw - 30rem);
  height: 30.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background: orange; */
  /* padding-bottom: 5rem; */

  @media only Screen and (max-width: 92em) {
    /* background: pink; */
    width: calc(100vw - 25rem);
    left: 3rem;

    .slick-slider .slick-arrow {
      top: 100%;
    }
  }

  @media only Screen and (max-width: 80em) {
    width: calc(100vw - 17rem);
  }

  @media only Screen and (max-width: 40em) {
    /* width: 90vw; */

    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: var(--white);
    font-size: calc(1.5rem + 1vw);

    @media only Screen and (max-width: 92em) {
      font-size: 3rem;
    }

    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }

  .slick-slider .slick-dots button:before {
    color: var(--white);
    font-size: calc(1.5rem + 0.25vw);
    /* padding-bottom: 3rem; */
  }

  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    /* padding-left: 1.1rem; */

    /* margin-bottom: 3rem; */
  }
`

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <ProjectsContainer>
      <SitOnLedge>
        <img src={sitOnLedgeLong} alt='man on ledge' />
      </SitOnLedge>

      <TitleContainer>
        <Title>Projects</Title>
        <CurvedLine />
      </TitleContainer>
      <Carousel>
        <Slider {...settings}>
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
        </Slider>
      </Carousel>
    </ProjectsContainer>
  )
}

export default ProjectSection
