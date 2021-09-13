import styled from 'styled-components/macro'

import React, { useState } from 'react'
import Carousel from '../../components/Carousel'
// import data from './data.js'

const data = [
  {
    name: 'Victoria Urquhart',
    image: 'tory',
    quote:
      "I came from South Africa to teach English in Korea.  It was only my second year teaching and then covid happened.  Nick's online games are easy to prepare and my students really enjoy them.  Classpoint also allowed me to use a lot of the games I had prepared the previous year after we had to move all the classes online.  This saved me a ton of time in my class prep this year.",
  },
  {
    name: 'Craig Comer;',
    image: 'craig',
    quote:
      "I have been teaching English in Korea for 10 years.  When covid happened we were pushed to move everything online with very little notice.  Not all of my classroom games worked well online.  Classpoint helped me to use my regular classroom games online.  Nick's other site Scategories was super helpful as well because it is easy to use when I didn't have another lesson planned for that period.  They helped me out a lot this past year.",
  },
  {
    name: 'Eunjin Kim',
    image: 'kim',
    quote:
      'I am an Primary School English Teacher.  When covid happened we needed a way to teach and interact with students online.  Nick created the website Classpoint for us. It helps me to assess the students and students can enjoy the games they used to play when we had in person classes. Assessment and teaching with classpoint.ca has become a lot easier. Futhermore he developed other programs for us like connect four and scategories.  Now that students are back in the classroom we continue to play these games. Both the students and the other teachers at our school really enjoyed using his websites.',
  },
  {
    name: 'Jin Seohee',
    image: 'msjin',
    quote:
      'I am an English teacher.  I use classpoint.ca to keep track of my students participation in the classroom and use it as a reward system.  The website allows me to track their participation during online classes, and makes it easy for me to see at a glance who has spoken in class so far.  When students get a certain number of points they get a class reward.  This was really helpful during covid because without it is is really hard to keep track of who is participating while teaching on zoom.',
  },
  {
    name: 'Heareong Jo',
    image: 'heajong',
    quote:
      'It was my first time teaching English this year, and I needed a way to practice new vocabulary with the students.  Nick created the game Connect Four for me which we could use in the classroom.  The students really enjoyed it.',
  },
]

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  /* overflow: hidden; */

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
