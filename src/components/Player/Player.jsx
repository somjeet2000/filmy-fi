import React from 'react'
import ReactPlayer from 'react-player'
import './Player.css'

export default function Player() {
  return (
    <div className='player'>
        <ReactPlayer
        controls={true}
        height='500px'
        width='100%'
        loop={true}
        muted={false}
        playing={true}
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' />
    </div>
  )
}

