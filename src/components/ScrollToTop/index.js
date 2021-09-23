import styled from 'styled-components'

import React from 'react'
import { Link as LinkS } from 'react-scroll'

import { FaArrowUp } from 'react-icons/fa'

const ScrollUpIcon = styled(FaArrowUp)`
  margin-right: 1rem;
`

const ScrollToTopButton = styled(LinkS)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: var(--black);
  margin-top: 3rem;
  border-radius: 10px;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: 6px 6px 15px var(--fontMedium), -6px -6px 15px #ffffff;
    transform: translate(-2px, -1px);
  }

  &:active {
    box-shadow: 2px 2px 5px #adadad, -2px -2px 5px #ffffff;
    transform: translate(1px, 2px);
  }
`

const ScrollToTop = () => {
  return (
    <ScrollToTopButton to='home' smooth={true} duration={750} offset={50}>
      <ScrollUpIcon /> to top
    </ScrollToTopButton>
  )
}

export default ScrollToTop
