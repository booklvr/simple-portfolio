import styled from 'styled-components/macro'

import React, { useState } from 'react'
import Carousel from '../../components/Carousel'
import data from './data.js'

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media only Screen and (max-width: 42em) {
    margin-top: 4rem;
    margin-bottom: 4.5rem;
  }
`

const TestimonialsHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: var(--tlShadow), var(--brShadow);
  color: var(--background);
  margin-bottom: 2rem;

  @media only Screen and (max-width: 48em) {
    font-size: 5rem;
  }

  @media only Screen and (max-width: 44em) {
    font-size: 4.5rem;
  }

  @media only Screen and (max-width: 40em) {
    font-size: 4rem;
  }

  @media only Screen and (max-width: 26.25em) {
    font-size: 3rem;
  }

  @media only Screen and (max-width: 24em) {
    font-size: 2.5rem;
  }

  @media only Screen and (max-width: 20em) {
    font-size: 2rem;
  }
`

const TestimonialsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40rem;

  @media only Screen and (max-width: 42em) {
    width: 100%;
  }
`

const TestimonialsText = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5rem 3rem 1rem;
  font-size: 1.1rem;
  font-weight: 300;
  border-radius: 10px;
  line-height: 1.75;
  color: var(--fontMedium);
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;

  @media only Screen and (max-width: 42em) {
    padding: 0.5rem;
  }
`

const TestimonialName = styled.h4`
  font-size: 2rem;
  color: var(--black);
`

const TextImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 6px 6px 10px #adadad, -8px -8px 10px #ffffff;

  /* overflow: hidden; */
  shape-outside: content-box;
  float: left;
  width: 8.5rem;
  height: 8.5rem;
  padding: 0.5rem;
  background: transparent;
  margin-top: -3.5rem;
  margin-left: -1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  shape-margin: 2rem;

  @media only Screen and (max-width: 42em) {
    width: 7rem;
    height: 7rem;
  }

  @media only Screen and (max-width: 40em) {
    width: 5rem;
    height: 5rem;
    margin-top: -2rem;
    margin-left: -1.5rem;
    shape-margin: 1rem;
  }
`

const TextImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50rem;
  height: 10rem;
  margin-bottom: 3rem;
  /* overflow-x: hidden; */

  @media only Screen and (max-width: 44em) {
    max-width: 40rem;
  }

  @media only Screen and (max-width: 42em) {
    margin-bottom: 0;
  }

  @media only Screen and (max-width: 1000px) {
    max-width: 40rem;
  }

  @media only Screen and (max-width: 600px) {
    max-width: 30rem;
  }

  @media only Screen and (max-width: 480px) {
    max-width: 20rem;
  }

  @media only Screen and (max-width: 360px) {
    max-width: 18rem;
  }

  @media only Screen and (max-width: 320px) {
    max-width: 15rem;
  }
`

const TestimonialsSection = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (index) => {
    setSlideIndex(index)
  }

  const thumbnail =
    require(`../../assets/${data[slideIndex].image}.png`).default

  return (
    <TestimonialsContainer id='testimonials'>
      <TestimonialsHeader>Testimonials</TestimonialsHeader>

      <TestimonialsContent>
        <CarouselContainer>
          <Carousel
            data={data}
            handleClick={handleClick}
            slideIndex={slideIndex}
          />
        </CarouselContainer>
        <TestimonialsText>
          <TextImageContainer>
            <TextImage src={thumbnail}></TextImage>
          </TextImageContainer>
          <TestimonialName>{data[slideIndex].name}</TestimonialName>
          {data[slideIndex].quote}
        </TestimonialsText>
      </TestimonialsContent>
    </TestimonialsContainer>
  )
}

export default TestimonialsSection
