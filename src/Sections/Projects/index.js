import React from 'react'
import styled from 'styled-components'
import sitOnLedgeLong from '../../assets/sitOnLedgeLong.svg'
import Slider from 'react-slick'
import Card from '../../components/Card'

import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

const ProjectsContainer = styled.div`
  width: 100vw;

  min-height: calc(10rem + 70vw);
  background-color: var(--black);
  /* background-color: darkblue; */

  position: relative;
  display: block;
  object-fit: cover;

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
  position: absolute;

  width: 110vw;
  top: 5rem;
  right: -5rem;
  /* min-height: calc(20rem + 60vw); */

  /* image {
    height: 100%;
    width: auto;
  } */

  /* right: -5vw;
  top: 5rem; */

  /* max-width: 40rem; */
  /* bottom: calc(2rem + 5vw); */
  /* transform: translateY(-50%); */

  @media only Screen and (max-width: 48em) {
    width: 140vw;
    right: -5rem;
    /* top: 3rem; */
  }

  @media only Screen and (max-width: 40em) {
    /* width: 70rem; */
    /* right: -6rem; */
  }
`

const Main = styled.div``

const TitleContainer = styled.div`
  position: absolute;
  right: 50%;
  top: calc(4rem + 1vw);
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
  top: 5rem;
  left: 5rem;
  width: 65vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .slick-slider .slick-arrow {
    top: 75%;
  }

  @media only Screen and (max-width: 40em) {
    width: 90vw;

    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: var(--white);
    font-size: calc(1.5rem + 1vw);

    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }

  .slick-slider .slick-dots

  .slick-slider .slick-dots button:before {
    color: var(--white);
    font-size: calc(1.5rem + 0.25vw);
  }

  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
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
            text='CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them.'
            name='Jenny (CodeCall)'
          />
          <Card
            title='Scategories'
            text='CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them.'
            name='Jenny (CodeCall)'
          />
          <Card
            title='SpeedQuiz'
            text='CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them.'
            name='Jenny (CodeCall)'
          />
          <Card
            title='ConnectFour'
            text='CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them.'
            name='Jenny (CodeCall)'
          />
        </Slider>
      </Carousel>
    </ProjectsContainer>
  )
}

export default ProjectSection
