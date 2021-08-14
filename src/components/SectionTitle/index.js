import styled from 'styled-components'
import React from 'react'

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 3rem 0 2rem;

  @media only Screen and (max-width: 40em) {
    flex-direction: column;
    height: 3rem;
    margin: 1.5rem 0 1rem;
  }
`

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  font-weight: 300;
  color: black;
  padding: 0 1rem;
`

const TitleLine = styled.div`
  flex: 1;
  height: 2px;
  background-color: black;

  @media only Screen and (max-width: 48em) {
    width: 20rem;
    max-height: 2px;
    margin: 0;
    padding: 0;
    background-color: black;
    flex: null;
  }
`

const SectionTitle = ({ reverse, title }) => {
  return (
    <SectionTitleContainer reverse={reverse}>
      <Title>{title}</Title>
      <TitleLine></TitleLine>
    </SectionTitleContainer>
  )
}

export default SectionTitle
