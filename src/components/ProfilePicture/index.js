import styled from 'styled-components/macro'
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
    props.current ? 'var(--largePrimaryShadow)' : 'var(--largeDarkShadow)'};

  cursor: pointer;
  margin: 1rem;

  &:hover {
    transform: scale(1.02) translate(-2px, -2px);
    box-shadow: ${(props) =>
      props.current
        ? 'var(--largePrimaryShadowHover)'
        : 'var(--largeDarkShadowHover)'};
  }
  &:active {
    transform: scale(0.9);
    box-shadow: var(--largePrimaryShadow);
  }

  @media only Screen and (max-width: 42em) {
    width: 4rem;
    height: 4rem;
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
