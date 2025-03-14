import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength'
import VideoLive from '../shared/VideoLive'

const VideoCard = ({ video }) => {
  return <Link to={`/video/${video?.videoId}`}>
    <div className='flex flex-col mb-8'>
      <div className="relative h-48 md:40 md:rounded-xl overflow-hidden">
        <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url} alt="" />
        {video.lengthSeconds && (
          <VideoLength time={video?.lengthSeconds} />
        )}
        {video.isLiveNow && (
          <VideoLive video={video} />
        )}
      </div>

      <div className='text-white mt-3 flex items-start'>
        <div className='flex items-center'>
          <div className='flex h-9 w-9 rounded-full overflow-hidden'>
            <img className='h-full w-full object-cover' src={video?.author?.avatar[0].url} alt="" />
          </div>
        </div>

        <div className='flex flex-col ml-3 overflow-hidden'>
          <span className='text-sm font-bold line-clamp-2'>
            {video?.title}
          </span>

          <span className='text-[12px] font-semibold mt-2 text-white/[0.8] flex items-center'>
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-white/[0.6] text-[12px] ml-1" />
            )}
          </span>

          <div className='flex text-[12px] text-white/[0.8] font-semibold truncate overflow-hidden'>
            <span>{video?.isLiveNow ? `${abbreviateNumber(video?.stats?.viewers, 0)} watching` : `${abbreviateNumber(video?.stats?.views, 0)} views`}</span>
            <span className='flex text-[24px] leading-none font-bold text-white/[0.8] relative top-[-10px] mx-1'>.</span>
            <span className='truncate'>{video?.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
}

export default VideoCard
