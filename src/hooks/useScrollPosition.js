import { useEffect, useRef } from 'react'

const getScrollYPosition = () => {
  return window.scrollY
}

const getScrollDirection = (currPos, prevPos) => {
  console.log('get ScrollDirection')
  console.log('curr', currPos)
  console.log('prev', prevPos)
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
    console.log('handle Callback')

    const currentPosition = getScrollYPosition()

    const scrollDirection = getScrollDirection(
      currentPosition,
      previousPosition.current
    )

    const color = setColorTheme(currentPosition)

    effect(scrollDirection, color)

    // setScrollDirection(scrollDirection)
    // setColorTheme(currentPosition)

    previousPosition.current = currentPosition
    throttleTimeout = null
  }

  useEffect(() => {
    const handleScroll = () => {
      console.log('handle scroll')
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(callBack, wait)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])
}

export default useScrollPosition
