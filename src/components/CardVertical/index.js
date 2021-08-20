import styled from 'styled-components'
import React from 'react'

const CardVerticalContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  padding: 2rem;
  margin-bottom: 3rem;

  @media only Screen and (max-width: 40em) {
    display: flex;
  }
`

const ThumbnailLink = styled.a`
  text-align: center;
`

const Thumbnail = styled.img`
  border: 2px solid var(--nav2);
  margin: 0 auto 1rem;
  width: 100%;
  object-fit: cover;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 36em) {
    padding: 0;
  }
`

const Tag = styled.div`
  background-color: var(--nav2);
  color: white;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.2rem;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
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
  margin-bottom: 1rem;
`

const Text = styled.p`
  /* padding: 0 calc(1rem + 1vw); */
  color: var(--nav2);
  font-size: calc(0.9rem);
  text-align: center;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 2rem;
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
  background-color: var(--primary);
  color: var(--white);

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  &:last-of-type {
    background-color: var(--primary);
    color: white;
    margin-left: 1rem;
  }
`

const CardVertical = ({ title, text, image, link, git, tags }) => {
  const thumbnail = require(`../../assets/${image}.png`).default

  return (
    <CardVerticalContainer>
      <TitleContainer>
        <SubHeading>Featured Project</SubHeading>
        <Title>{title}</Title>
      </TitleContainer>
      <ThumbnailLink href={link} rel='noreferrer' target='_blank'>
        <Thumbnail src={thumbnail} alt={title} />
      </ThumbnailLink>
      <Text>{text}</Text>
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
      <ButtonContainer>
        <CardButton href={git} target='_blank'>
          Github
        </CardButton>
        <CardButton href={link} target='_blank'>
          Live Site
        </CardButton>
      </ButtonContainer>
    </CardVerticalContainer>
  )
}

export default CardVertical
