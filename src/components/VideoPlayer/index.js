import styled, { css } from 'styled-components/macro'

import React, { useRef, useState } from 'react'
import screenfull from 'screenfull'

//hooks
import useVideoPlayer from '../../hooks/useVideoPlayer'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import { BsPlay, BsPause, BsFullscreen } from 'react-icons/bs'

const VideoPlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only Screen and (max-width: 768px) {
    /* width: 100%; */
    /* max-width: 25rem; */

    margin-bottom: padding 0 0 1rem;
  }

  @media only Screen and (max-width: 540px) {
    /* max-width: 25rem; */
  }

  @media only Screen and (max-width: 414px) {
    /* max-width: 21rem; */
  }

  @media only Screen and (max-width: 375px) {
    /* max-width: 19rem; */
  }

  @media only Screen and (max-width: 320px) {
    /* max-width: 15rem; */
  }
`

const VideoPlayerWrapper = styled.div`
  width: 100%;
  /* max-width: 20rem;
  padding: 0 1rem; */

  /* @media only Screen and (max-width: 64em) {
    padding: 0 1rem 0;
  } */
`

const Video = styled.video`
  width: 100%;
  border-radius: 20px;
  box-shadow: var(--largeDarkShadow);
  margin-bottom: 1rem;

  @media only Screen and (max-width: 64em) {
    border-radius: 10px;
  }
`

const VideoControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  padding: 0 1rem;
  margin: 0 1rem;

  @media only Screen and (max-width: 62em) {
    margin-bottom: 1rem;
  }
`

const VideoActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* @media only Screen and (max-width: 350px) {
    padding: 0 1rem;
    width: 50%;
  } */
`

const RangeWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: var(--background);
    /* flex: 1; */
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    &::-moz-range-thumb {
      border: none;
    }
  }

  .range-style {
    margin-right: 1rem;
    @media only Screen and (max-width: 42em) {
      margin-right: 0;
    }

    &::-webkit-slider-runnable-track {
      /* display: flex;
      align-items: center; */
      height: 8px;
      border-radius: 10px;
      background-color: var(--background);
      box-shadow: inset 4px 4px 8px #adadad, inset -4px -4px 8px #ffffff;
    }

    &::-moz-range-track {
      /* display: flex;
      align-items: center; */
      /* justify-content: center; */
      height: 8px;
      border-radius: 10px;
      background-color: var(--background);
      box-shadow: inset 4px 4px 8px #adadad, inset -4px -4px 8px #ffffff;
    }
    &::-webkit-slider-thumb {
      position: relative;

      top: -0.5rem;
      width: 25px;
      height: 25px;
      background-color: var(--background);
      background-image: linear-gradient(-45deg, rgba(white, 0.8), transparent);
      border-radius: 50%;
      box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
    }

    &::-moz-range-thumb {
      position: relative;
      /* top: -.5rem; */
      width: 25px;
      height: 25px;
      background-color: var(--background);
      background-image: linear-gradient(-45deg, rgba(white, 0.8), transparent);
      border-radius: 50%;
      box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
    }
  }
`

const ButtonStyle = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 50%;
  background-color: var(--background);
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
  margin: 0 1rem;

  @media only Screen and (max-width: 350px) {
    margin: 0 0.5rem;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const PlayButton = styled.button`
  ${ButtonStyle}
`

const ExpandButton = styled.button`
  ${ButtonStyle}

  @media only Screen and (max-width: 46em) {
    display: none;
  }

  svg {
    width: 15px;
    height: 15px;
  }
`

// const VideoSpeed = styled.select``

// const SpeedOption = styled.option``

const VideoSpeedDropdown = styled.div`
  position: relative;

  @media only Screen and (max-width: 42em) {
    display: none;
  }
`

const VideoSpeed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: 4.5rem;
  background-color: var(--background);
  border-radius: 10px;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
  font-size: 0.75rem;

  @media only Screen and (max-width: 350px) {
    width: 3.3rem;
    padding: 0.5rem;
  }

  span {
    margin-right: 0.5rem;
  }
`

const VideoSpeedList = styled.ul`
  display: ${({ speedMenu }) => (speedMenu ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  position: absolute;
  top: -6.75rem;
  left: 0rem;
  width: 4.5rem;
  background: var(--background);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: 8px 8px 15px #adadad, -8px -8px 15px #ffffff;
`

const VideoSpeedOption = styled.li`
  font-size: 0.75rem;
  padding: 0.2rem 0;
  cursor: pointer;

  &:hover {
    color: var(--primary);
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`

const VideoPlayer = ({ video, image, reverse }) => {
  const videoElement = useRef(null)
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
  } = useVideoPlayer(videoElement)

  // let isFullscreen, setIsFullscreen
  let errorMessage

  // try {
  //   ;[isFullscreen, setIsFullscreen] = useFullscreen(videoElement)
  // } catch (e) {
  //   errorMessage = 'Fullscreen not supported'
  //   isFullscreen = false
  //   setIsFullscreen = undefined
  // }

  // const [isFullScreen, setIsFullsceen] = useFullscreen(videoElement)

  const [speedMenu, setSpeedMenu] = useState(false)

  const toggleSpeedMenu = () => {
    setSpeedMenu(!speedMenu)
  }

  const videoSrc = require(`../../assets/${video}.mov`).default
  const imageSrc = require(`../../assets/${image}.png`).default

  const handleSpeedChange = (speed) => {
    setSpeedMenu(false)
    handleVideoSpeed(speed)
  }

  const handleFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(videoElement.current)
    }
  }

  return (
    <VideoPlayerContainer reverse={reverse}>
      <VideoPlayerWrapper>
        <Video
          src={videoSrc}
          poster={imageSrc}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          onClick={togglePlay}
          muted
          playsInline
        ></Video>
        <VideoControls>
          <VideoActions>
            <PlayButton onClick={togglePlay}>
              {!playerState.isPlaying ? <BsPlay /> : <BsPause />}
            </PlayButton>
            <RangeWrapper>
              <input
                type='range'
                min='0'
                max='100'
                value={playerState.progress}
                onChange={(e) => handleVideoProgress(e)}
                className='range-style'
              />
            </RangeWrapper>

            <VideoSpeedDropdown>
              <VideoSpeed onClick={toggleSpeedMenu}>
                <span>{playerState.speed}x</span>
                {speedMenu ? <FaAngleDown /> : <FaAngleUp />}
              </VideoSpeed>
              <VideoSpeedList speedMenu={speedMenu}>
                <VideoSpeedOption onClick={() => handleSpeedChange(0.5)}>
                  0.5x
                </VideoSpeedOption>{' '}
                <VideoSpeedOption onClick={() => handleSpeedChange(1)}>
                  1.0x
                </VideoSpeedOption>
                <VideoSpeedOption onClick={() => handleSpeedChange(1.5)}>
                  1.5x
                </VideoSpeedOption>
                <VideoSpeedOption onClick={() => handleSpeedChange(2)}>
                  2.0x
                </VideoSpeedOption>
              </VideoSpeedList>
            </VideoSpeedDropdown>
            {errorMessage ? (
              <ExpandButton
                onClick={() =>
                  alert(
                    'Fullscreen is unsupported by this browser, please try another browser'
                  )
                }
              >
                <BsFullscreen />
              </ExpandButton>
            ) : (
              <ExpandButton onClick={handleFullScreen}>
                <BsFullscreen />
              </ExpandButton>
            )}
          </VideoActions>
        </VideoControls>
      </VideoPlayerWrapper>
    </VideoPlayerContainer>
  )
}

export default VideoPlayer

// <VideoSpeed
//               value={playerState.speed}
//               onChange={(e) => handleVideoSpeed(e)}
//             >
//               <SpeedOption value='0.50'>0.5x</SpeedOption>
//               <SpeedOption value='1'>1x</SpeedOption>
//               <SpeedOption value='1.5'>1.5x</SpeedOption>
//               <SpeedOption value='2'>2x</SpeedOption>
//             </VideoSpeed>

// {!playerState.isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
