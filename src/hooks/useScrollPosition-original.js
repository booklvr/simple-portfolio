import { useRef, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

// function getScrollYPosition({ element, useWindow }) {
//   console.log('getScrollPosition function')
//   if (!isBrowser) return 0

//   const target = element ? element.current : document.body
//   const position = target.getBoundingClientRect()

//   return useWindow ? window.scrollY : position.top
// }

const getScrollYPosition = () => {
  return window.scrollY
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollYPosition({ useWindow }))

  console.log('useScrollPosition hook')
  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollYPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos

    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      console.log('scroll event triggered inside useLayoutEffect')
      if (wait) {
        console.log('wait...')
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
