import React from 'react';
import moment from 'moment';

export default function VideoLength({ time }) {
  const VideoLengthInSeconds = moment().startOf('day').seconds(time).format(`H:mm:ss`);
  const formattedVideoLength = VideoLengthInSeconds.charAt(0) === '0'
    ? VideoLengthInSeconds.substring(2) // Remove the leading '0' if H is '0'
    : VideoLengthInSeconds;

  return (
    <>
      <div className="absolute bottom-2 right-2 bg-black px-2 py-1 text-white text-xs rounded-md">
        {formattedVideoLength}
      </div>
    </>
  );
}




