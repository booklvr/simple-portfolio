import React from 'react'

export default function useFullscreen(elRef) {
  const [isFullscreen, setIsFullscreen] = React.useState(
    document[getBrowserFullscreenElementProp()] != null
  )

  const setFullscreen = () => {
    if (elRef.current == null) return

    if (typeof document.webkitRequestFullScreen != 'undefined') {
      elRef.current.webkitRequestFullscreen()
      setIsFullscreen(document[getBrowserFullscreenElementProp()] != null)
    } else {
      elRef.current
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(document[getBrowserFullscreenElementProp()] != null)
        })
        .catch(() => {
          setIsFullscreen(false)
        })
    }
  }

  React.useLayoutEffect(() => {
    document.onfullscreenchange = () =>
      setIsFullscreen(document[getBrowserFullscreenElementProp()] != null)

    return () => (document.onfullscreenchange = undefined)
  })

  return [isFullscreen, setFullscreen]
}

function getBrowserFullscreenElementProp() {
  if (typeof document.fullscreenElement !== 'undefined') {
    return 'fullscreenElement'
  } else if (typeof document.mozFullScreenElement !== 'undefined') {
    return 'mozFullScreenElement'
  } else if (typeof document.msFullscreenElement !== 'undefined') {
    return 'msFullscreenElement'
  } else if (typeof document.webkitFullscreenElement !== 'undefined') {
    return 'webkitFullscreenElement'
  } else {
    throw new Error('fullscreenElement is not supported by this browser')
  }
}
