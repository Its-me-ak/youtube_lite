import React from 'react';
import moment from 'moment';

const VideoLength = ({ time }) => {
    // Convert time to seconds
    const duration = moment.duration(time, 'seconds');

    let videoLength = '';

    // Check if the duration is greater than or equal to 1 hour
    if (duration.asSeconds() >= 3600) {

        videoLength = moment.utc(duration.asMilliseconds()).format('H:mm:ss');
    } else {

        videoLength = moment.utc(duration.asMilliseconds()).format('m:ss');
    }

    return (
        <div className='absolute bottom-2 right-2 bg-black/[0.8] py-1 px-2 text-white text-xs rounded-md'>
            {videoLength}
        </div>
    );
};

export default VideoLength;
