import React from 'react'
import styled from 'styled-components/macro'
import VideoPlayer from '../VideoPlayer'

const CARD = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  /* justify-content: space-between; */
  /* align-items: stretch; */

  padding: 1rem;
  background: var(--background);
  border-radius: 20px;

  box-shadow: 6px 6px 20px #adadad, -5px -5px 50px #ffffff;

  margin: 0rem 1rem 3rem;
  margin-top: 3rem;

  /* @media only Screen and (max-width: 48em) {
    max-width: 45rem;
  } */

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`

const CardVideoAndTagContainer = styled.div`
  display: flex;
  width: 60%;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* width: 90%; */
  margin-top: 1rem;
  padding: 0.5rem;

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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.reverse ? 'flex-end' : 'flex-start')};
  justify-content: flex-start;
  padding: 1rem;
  /* min-width: 17.5rem; */
  /* max-width: 17.5rem; */

  @media only Screen and (max-width: 48em) {
    /* max-width: 15rem; */
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
  margin-bottom: 0.5rem;
`

const Title = styled.h4`
  font-size: 2rem;

  color: var(--black);
  margin-bottom: 1rem;
`

const Text = styled.p`
  color: var(--fontMedium);
  font-size: 1.1rem;
  text-align: ${(props) => (props.reverse ? 'right' : 'left')};
  font-weight: 300;
  line-height: 1.75;
  flex: 1;

  @media only Screen and (min-width: 60em) {
    /* line-height: 2; */
    /* margin: ${(props) => (props.reverse ? '0 0 0 2rem' : '0 2rem 0 0')}; */
  }

  @media only Screen and (max-width: 48em) {
    max-width: 15rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  flex-wrap: wrap;
`

const CardButton = styled.a`
  margin-top: 1rem;
  font-size: calc(1rem + 0.5vw);
  color: var(--black);
  /* width: 8rem; */
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
  /* text-align: center; */
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
    margin: ${({ reverse }) => (reverse ? '1rem 1rem 0 0' : '1rem 0 0 1rem')};
  }

  @media only Screen and (max-width: 48em) {
    /* width: revert;
    padding: 0.5rem 1rem; */
  }
`

const index = ({ title, text, video, link, git, tags, reverse }) => {
  console.log('video', video)
  // const thumbnail = require(`../../assets/${image}.png`).default
  return (
    <CARD reverse={reverse}>
      <CardVideoAndTagContainer>
        <VideoPlayer video={video} reverse={reverse} />
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
      </CardVideoAndTagContainer>
      <CardContent reverse={reverse}>
        <TitleContainer reverse={reverse}>
          <SubHeading>Featured Project</SubHeading>
          <Title>{title}</Title>
        </TitleContainer>

        <Text reverse={reverse}>{text}</Text>

        <ButtonContainer reverse={reverse}>
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

// <ThumbnailLink href={link} rel='noreferrer' target='_blank'>
//           <Thumbnail src={thumbnail} alt={title} />
//         </ThumbnailLink>
