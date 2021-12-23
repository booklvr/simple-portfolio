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
  const throttleTimeout = useRef(null)

  throttleTimeout.current = null

  // let throttleTimeout = null

  // const callBack = () => {
  //   const currentPosition = getScrollYPosition()

  //   const scrollDirection = getScrollDirection(
  //     currentPosition,
  //     previousPosition.currentuse
  //   )

  //   const color = setColorTheme(currentPosition)

  //   effect(scrollDirection, color)

  //   previousPosition.current = currentPosition
  //   throttleTimeout.current = null
  //   // throttleTimeout = null
  // }

  useEffect(() => {
    const callBack = () => {
      const currentPosition = getScrollYPosition()

      const scrollDirection = getScrollDirection(
        currentPosition,
        previousPosition.current
      )

      const color = setColorTheme(currentPosition)

      effect(scrollDirection, color)

      previousPosition.current = currentPosition
      throttleTimeout.current = null
      // throttleTimeout = null
    }

    const handleScroll = () => {
      if (throttleTimeout.current === null) {
        throttleTimeout.current = setTimeout(callBack, wait)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [wait, effect])
}

export default useScrollPosition
