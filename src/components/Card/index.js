import React from 'react'
import styled from 'styled-components/macro'

const CARD = styled.div`
  margin: 1rem;
  color: var(--black);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 26rem;
  background: rgb(239, 247, 249);
  background: linear-gradient(
    120deg,
    rgba(239, 247, 249, 1) 0%,
    rgba(210, 224, 228, 1) 100%
  );
  padding: 2rem;

  a {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 17rem;
`

const Title = styled.h4`
  margin-top: 1rem;
  font-size: calc(1.4rem + 0.5vw);

  /* transform: skew(-44deg); */
  color: var(--black);
`

const Text = styled.h3`
  /* padding: 0 calc(1rem + 1vw); */
  color: var(--nav2);
  font-size: calc(0.5rem + 0.5vw);
  text-align: center;
  font-weight: 600;
`

const Thumbnail = styled.img`
  border: 2px solid var(--nav2);
  margin: 1rem;
  width: 90%;
  object-fit: cover;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const CardButton = styled.a`
  padding: 1rem 1rem;
  margin-top: 1rem;
  width: 12rem;
  border-radius: 0;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: var(--white);
  color: var(--black);

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  &:last-of-type {
    background-color: var(--purple);
    color: white;
  }
`

const index = ({ title, text, image, link, git }) => {
  const thumbnail = require(`../../assets/${image}.png`).default
  return (
    <CARD>
      <a href={link} rel='noreferrer' target='_blank'>
        <Thumbnail src={thumbnail} alt={title} />
      </a>
      <CardContent>
        <Title>{title}</Title>
        <Text>{text}</Text>

        <ButtonContainer>
          <CardButton href={git} target='_blank'>
            Checkout the code
          </CardButton>
          <CardButton href={link} target='_blank'>
            Live Site
          </CardButton>
        </ButtonContainer>
      </CardContent>
    </CARD>
  )
}

export default index
