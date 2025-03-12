import React from 'react'
import { CiStreamOn } from "react-icons/ci";

const VideoLive = ({ video }) => {
    return (
        <div>
            <div className='absolute bottom-2 right-2 bg-[#cc0000] py-1 px-2 text-white text-xs rounded-md'>
                <span className='flex items-center gap-1'> <span><CiStreamOn /></span> <span>Live</span></span>
            </div>
        </div>
    )
}

export default VideoLive
