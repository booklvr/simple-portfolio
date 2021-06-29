import React from 'react'
import styled from 'styled-components'

const CARD = styled.div`
  background-color: var(--nav2);
  background: transparent;
  color: var(--white);
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  /* border-radius: 20px; */
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Title = styled.h4`
  padding: 0 calc(1rem + 1vw);
  padding-top: 2rem;
  font-size: calc(0.6rem + 0.5rem);
  text-align: center;
`

const Text = styled.h3`
  padding: 0 calc(1rem + 1vw);
  padding-top: 2rem;
  font-size: calc(0.6rem + 0.5vw);
  text-align: center;
`

const index = ({ title, text }) => {
  return (
    <CARD>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </CARD>
  )
}

export default index
