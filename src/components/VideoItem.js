import React from 'react';

class VideoItem extends React.Component {
	onSelectVideo = () => {
		this.props.selectedVideo(this.props.video);
	};
	
	 render () {
	 	return <div className="row video-item-wrapper" onClick={this.onSelectVideo}>
	  	<div className="col-4">
	  	<img src={this.props.video.snippet.thumbnails.default.url} alt={this.props.video.snippet.title}/>
	  	</div>
	  	<div className="col-8">
	  	<p>{this.props.video.snippet.title}</p>
	  	</div>
	  </div>
	}
}
export default VideoItem;
