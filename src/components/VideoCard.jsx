import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import {bsFillCheckCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const VideoCard = ({video}) => {
      return <Link to={`/video/${video?.videoId}`}>
        <div className='flex flex-col mb-8'>
          <div className="relative h-48 md:40 md:rounded-xl overflow-hidden">
            <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url} alt="" />
          </div>
        </div>
      </Link>
}

export default VideoCard
