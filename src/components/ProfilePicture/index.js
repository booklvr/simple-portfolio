import styled from 'styled-components'
import React from 'react'

const PictureContainer = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  border-radius: 50%;
  padding: 0.25rem;
  background: var(--background);

  box-shadow: ${(props) =>
    props.current
      ? '6px 6px 10px var(--primary), -8px -8px 10px #ffffff'
      : '6px 6px 10px #adadad, -8px -8px 10px #ffffff'};

  cursor: pointer;

  @media only Screen and (max-width: 42em) {
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
  }
`

const Picture = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`

const ProfilePicture = ({ image, current, handleClick, index }) => {
  const thumbnail = require(`../../assets/${image}.png`).default

  return (
    <PictureContainer
      current={current}
      index={index}
      onClick={(e) => handleClick(index)}
    >
      <Picture src={thumbnail} />
    </PictureContainer>
  )
}

export default ProfilePicture
