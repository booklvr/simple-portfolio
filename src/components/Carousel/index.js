import React from 'react'
import styled from 'styled-components/macro'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ProfilePicture from '../ProfilePicture'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const SliderCarousel = styled(Slider)`
  max-width: 100%;
  height: 8rem !important;
  display: flex !important;
  align-items: center;
  justify-content: center;

  @media only Screen and (max-width: 48em) {
    height: 6rem;
  }

  .slick-track {
    overflow: hidden;
  }

  .slick-slide {
    display: flex;
    justify-content: center;

    div {
      display: flex !important;
      justify-content: center;
      align-items: center;
    }
  }
`

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        background: 'var(--background)',
        boxShadow: '4px 4px 15px #adadad, -4px -4px 15px #ffffff',
      }}
      onClick={onClick}
    >
      <FaAngleRight color='#000' />
    </div>
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        background: 'var(--background)',
        boxShadow: '4px 4px 15px #adadad, -4px -4px 15px #ffffff',
      }}
      onClick={onClick}
    >
      <FaAngleLeft color='#000' />
    </div>
  )
}

const Carousel = ({ data, handleClick, slideIndex }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '10px',
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '5px',
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '2px',
          arrows: false,
        },
      },
    ],
  }
  return (
    <SliderCarousel {...settings}>
      {data.map((testimonial, index) => (
        <div key={index}>
          <ProfilePicture
            index={index}
            current={index === slideIndex ? true : false}
            image={testimonial.image}
            handleClick={handleClick}
          />
        </div>
      ))}
    </SliderCarousel>
  )
}

export default Carousel
