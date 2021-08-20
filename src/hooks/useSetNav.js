import { useEffect, useState } from 'react'

const getWindowDifference = () => {
  return (window.ScrollY = window.innerHeight)
}

export default function useSetNav() {
  const [windowDifference, setWindowDifference] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      setWindowDifference(getWindowDifference())
    }
    // handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (windowDifference >= 0) {
    return true
  } else {
    return false
  }
}
