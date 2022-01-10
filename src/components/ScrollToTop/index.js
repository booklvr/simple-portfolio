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
  box-shadow: var(--largeDarkShadow);
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: var(--largeDarkShadowHover);
    transform: translate(-2px, -1px);
  }

  &:active {
    box-shadow: var(--mediumDarkShadow);
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
