import React from 'react';

class SearchBar extends React.Component {
	state = {
		term: 'LA'
	};

	onInputChange = e => {
    	this.setState({
     	 	term: e.target.value
    	});
  	};

  	onFormSubmit = e => {
  		e.preventDefault();
  		this.props.searchVideo(this.state.term);
  	};
	render () {
    	return <div className="search-bar col-12">
       		<form onSubmit={this.onFormSubmit}>
	        <h1 className="title">Search video</h1>
	        <input type='text' value={this.state.term} onChange={this.onInputChange}/>
	        </form>
    	</div>
    };
}

export default SearchBar;
