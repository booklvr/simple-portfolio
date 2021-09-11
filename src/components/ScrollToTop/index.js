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
  margin-top: 5rem;
  border-radius: 10px;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
`

const ScrollToTop = () => {
  return (
    <ScrollToTopButton to='home' smooth={true} duration={750} exact='true'>
      <ScrollUpIcon /> to top
    </ScrollToTopButton>
  )
}

export default ScrollToTop
