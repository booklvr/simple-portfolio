import React from 'react'
import styled from 'styled-components/macro'

const CARD = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: stretch;

  max-width: 50rem;
  padding: 2rem 1rem;
  /* margin-bottom: 3rem; */
  background: linear-gradient(145deg, #dadaff, #b8b8d8);
  background: var(--background);
  border-radius: 20px;

  box-shadow: 6px 6px 20px #adadad, -5px -5px 50px #ffffff;

  margin-top: 3rem;

  @media only Screen and (max-width: 40em) {
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
  width: 90%;
  margin-top: 2rem;
  padding: 0.5rem 0.5rem;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px #adadad, inset -4px -4px 8px #ffffff;
`

const Tag = styled.div`
  background-color: var(--fontMedium);
  color: white;
  font-size: 0.75rem;
  padding: 0.3rem 0.5rem;
  margin: 0.4rem 0.2rem 0;
  border-radius: 5px;
`

const ThumbnailLink = styled.a`
  text-align: center;
`

const Thumbnail = styled.img`
  border: 2px solid var(--nav2);
  margin: 0 auto;
  width: 90%;
  object-fit: cover;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.reverse ? 'flex-end' : 'flex-start')};
  justify-content: flex-start;
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
  color: var(--primary);
  margin-bottom: 5px;
`

const Title = styled.h4`
  font-size: 2rem;

  /* transform: skew(-44deg); */
  color: var(--black);
  /* border-bottom: 2px solid var(--primary); */
  margin-bottom: 1rem;
`

const Text = styled.p`
  /* padding: 0 calc(1rem + 1vw); */
  color: var(--fontMedium);
  font-size: 1rem;
  text-align: ${(props) => (props.reverse ? 'right' : 'left')};
  font-weight: 600;
  line-height: 1.25;
  flex: 1;

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
  margin-top: 1rem;
  font-size: calc(1rem + 0.5vw);
  color: var(--black);
  width: 8rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: var(--background);
  border-radius: 10px;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;

  &:hover {
    transform: scale(1.02) translate(-2px, -2px);
    box-shadow: 5px 5px 10px var(--darkShadow), 0px 0px 5px var(--lightShadow);
  }
  &:active {
    transform: scale(0.9);
  }

  &:last-of-type {
    margin-left: 1rem;
  }
`

const index = ({ title, text, image, link, git, tags, reverse }) => {
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
