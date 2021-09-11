import { useEffect, useRef } from 'react'

const getScrollYPosition = () => {
  return window.scrollY
}

const getScrollDirection = (currPos, prevPos) => {
  if (currPos > prevPos) {
    return 'down'
  } else {
    return 'up'
  }
}

const setColorTheme = (currPos) =>
  currPos < window.innerHeight - 30 ? 'black' : 'white'

function useScrollPosition(effect, wait) {
  const previousPosition = useRef(getScrollYPosition)

  let throttleTimeout = null

  const callBack = () => {
    const currentPosition = getScrollYPosition()

    const scrollDirection = getScrollDirection(
      currentPosition,
      previousPosition.current
    )

    const color = setColorTheme(currentPosition)

    effect(scrollDirection, color)

    previousPosition.current = currentPosition
    throttleTimeout = null
  }

  useEffect(() => {
    const handleScroll = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(callBack, wait)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])
}

export default useScrollPosition
