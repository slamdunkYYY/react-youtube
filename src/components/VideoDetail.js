import React from 'react';

const VideoDetail = ({selectedVideo}) => {
	
	if (!selectedVideo) {
		return <div className="col-12 col-sm-6">Loading...</div>;
	}	
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;    
	const videoSrcTest = 'https://www.youtube.com/embed/phNje87fHwQ';
  return <div className="col-12 col-sm-6">
<iframe src={videoSrc}/>
<br/><br/>
  <div>
  {selectedVideo.snippet.description}
  </div>
  </div>;
}

export default VideoDetail;
