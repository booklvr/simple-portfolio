import React from 'react'
import styled from 'styled-components'

const CARD = styled.div`
  /* background-color: var(--nav2); */
  background: transparent;
  color: var(--white);
  /* margin-top: 5rem; */
  height: 27.5rem;
  width: calc(100vw - 30rem);
  /* border-radius: 20px; */
  /* margin-top: calc(5rem + 5vw); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  /* padding-bottom: 5rem; */
  /* background-color: pink; */

  @media only Screen and (max-width: 92em) {
    width: calc(100vw -20rem);
  }

  @media only Screen and (max-width: 80em) {
    width: calc(100vw -10rem);
  }
`

const Title = styled.h4`
  /* position: absolute;
  top: 1rem; */
  /* left: 50%; */

  /* padding: 0 calc(1rem + 1vw); */
  /* padding-top: 2rem; */
  /* margin-left: 1rem;
  margin-top: 1.5rem; */
  font-size: calc(1.4rem + 0.5vw);
  text-align: right;
  /* transform: skew(-44deg); */
  color: var(--white);
`

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
  padding: 2.5rem 0;
  width: 100%;
  height: 100%;
  /* background-color: grey; */
`

const Left = styled.div`
  height: 100%;
  width: 26.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  /* background-color: pink; */
  padding: 0 1rem;
  /* padding-right: 2rem; */
`

const Right = styled.div`
  height: 100%;
  width: 26.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 1rem;

  a {
    height: 100%;
  }
`

const Text = styled.h3`
  /* padding: 0 calc(1rem + 1vw); */
  /* padding-top: 2rem; */
  font-size: calc(0.6rem + 0.5vw);
  text-align: right;
`

const Thumbnail = styled.img`
  border: 2px solid var(--nav2);
  height: 17.5rem;
  width: auto;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 3rem;
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
      <Main>
        <Left>
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
        </Left>
        <Right>
          <a href={link} rel='noreferrer' target='_blank'>
            <Thumbnail src={thumbnail} alt={title} />
          </a>
        </Right>
      </Main>
    </CARD>
  )
}

export default index
