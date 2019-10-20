import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube.js';


class App extends React.Component {
	state = {
		searchVideo: "",
		videos: [],
		selectedVideo:null
	};

    inputOnSearch = async term => {
    	const key = '';/*put your api key*/
    	const response = await youtube.get('/search',{
    		params: {
    			q: term,
    			part: 'snippet',
    			key: key
    		}
    	});
    	this.setState({
    		searchVideo: term,
    		videos: response.data.items
    	});
   	};

   	onSelectVideo = onSelectVideo => {
   		this.setState({
   			selectedVideo: onSelectVideo
   		});
   		console.log(onSelectVideo)
   	}

	render () {
    	return <div>
    		<div className="video-search-wrapper container">
    		<div className="row">
        	<SearchBar searchVideo={this.inputOnSearch}/>
        	<VideoDetail selectedVideo={this.state.selectedVideo}/>
        	<VideoList videos={this.state.videos} selectedVideo={this.onSelectVideo}/>
        	</div>
        	</div>
        </div>
	};
}

export default App;
