import { useState, useEffect } from 'react'

function getWindowWidth() {
  const { innerWidth: width } = window
  return width
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth())
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (windowWidth > 800) {
    return 600
  } else {
    return windowWidth - 10
  }
}
