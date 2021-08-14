import React from 'react'
import styled from 'styled-components/macro'

const CARD = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: stretch;

  max-width: 60rem;
  padding: 2rem 1rem;

  /* box-shadow: 2px 2px 8px rgba(96, 63, 131, 1); */
  /* clip-path: inset(-3px -15px -15px -3px); */
  z-index: 100;
  /* margin: ${(props) =>
    props.reverse ? '2rem 0 5rem 26rem' : '2rem 26rem 5rem 0'}; */

  border: 2px solid black;
  margin-bottom: 3rem;
  position: relative;

  @media only Screen and (max-width: 48em) {
    /* background-color: red; */
  }

  @media only Screen and (max-width: 40em) {
    background-color: yellow;
    display: none;
  }
`

const CardThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  object-fit: cover;

  @media only Screen and (min-width: 70em) {
    width: 65%;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Tag = styled.div`
  background-color: var(--nav2);
  color: white;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  margin: 0.4rem 0.2rem 0;
`

const ThumbnailLink = styled.a`
  text-align: center;
`

const Thumbnail = styled.img`
  border: 2px solid var(--nav2);
  margin: 0 auto 1rem;
  width: 90%;
  object-fit: cover;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.reverse ? 'flex-end' : 'flex-start')};
  justify-content: space-between;
  width: 48%;

  @media only Screen and (min-width: 70em) {
    width: 35%;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.reverse ? 'flex-end' : 'flex-start')};
`

const SubHeading = styled.h5`
  font-size: 0.75rem;
  font-weight: 600;
  color: black;
  margin-bottom: 5px;
`

const Title = styled.h4`
  font-size: calc(1.4rem + 0.5vw);

  /* transform: skew(-44deg); */
  color: var(--black);
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
`

const Text = styled.p`
  /* padding: 0 calc(1rem + 1vw); */
  color: var(--nav2);
  font-size: calc(1rem);
  text-align: ${(props) => (props.reverse ? 'right' : 'left')};
  font-weight: 600;
  line-height: 1.5;

  @media only Screen and (min-width: 60em) {
    line-height: 2;
    margin: ${(props) => (props.reverse ? '0 0 0 2rem' : '0 2rem 0 0')};
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`

const CardButton = styled.a`
  padding: 1rem 1rem;
  margin-top: 1rem;
  width: 100%;
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
  background-color: var(--purple);
  color: var(--white);

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  &:last-of-type {
    background-color: var(--purple);
    color: white;
    margin-left: 1rem;
  }
`

const index = ({ title, text, image, link, git, tags, reverse }) => {
  console.log('reverse', reverse)
  const thumbnail = require(`../../assets/${image}.png`).default
  return (
    <CARD reverse={reverse}>
      <CardThumbnailContainer>
        <ThumbnailLink href={link} rel='noreferrer' target='_blank'>
          <Thumbnail src={thumbnail} alt={title} />
        </ThumbnailLink>
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
      </CardThumbnailContainer>
      <CardContent reverse={reverse}>
        <TitleContainer reverse={reverse}>
          <SubHeading>Featured Project</SubHeading>
          <Title>{title}</Title>
        </TitleContainer>

        <Text reverse={reverse}>{text}</Text>

        <ButtonContainer>
          <CardButton href={git} target='_blank'>
            Github
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
