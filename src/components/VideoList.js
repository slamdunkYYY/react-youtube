import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, selectedVideo}) => {
  const renderList = videos.map(video => {
    return  <VideoItem selectedVideo={selectedVideo} key={video.id.videoId} video={video}/>
  });

  return <div className="col-12 col-sm-6">
    {renderList}
  </div>
}

export default VideoList;
