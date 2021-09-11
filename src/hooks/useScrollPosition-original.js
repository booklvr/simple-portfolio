import { useRef, useLayoutEffect } from 'react'

const getScrollYPosition = () => {
  return window.scrollY
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollYPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollYPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos

    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}
