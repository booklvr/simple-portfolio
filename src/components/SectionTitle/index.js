import styled from 'styled-components/macro'
import React from 'react'

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: var(--fontMain);
`

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>
}

export default SectionTitle
