import React, { Component } from 'react';

// Components
import Nav from '../Nav/Nav';

// CSS
import "./Home.css"

class Home extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		url1: "",
      		url2: ""
    	};
  	}
	componentDidMount() {
		fetch('http://localhost:3001/getimages')
		.then(res => res.json())
		.then((result) => {
			this.setState({
				url1: result.cat1.url,
				url2: result.cat2.url,
				id1: result.cat1.id,
				id2: result.cat2.id,
			})
		})
	}

	// Get two random images
	get_image() {
		fetch('http://localhost:3001/getimages')
		.then(res => res.json())
		.then((result) => {
			this.setState({
				url1: result.cat1.url,
				url2: result.cat2.url,
				id1: result.cat1.id,
				id2: result.cat2.id,
			})
		})
	}

	// Vote for one image and call get_image()
	vote_image(nb) {
		let data;
		if (nb === 1) {
			data = { id: this.state.id1 }
		} else {
			data = { id: this.state.id2 }
		}
		fetch("http://localhost:3001/vote", {
			method: "POST",
			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    		},
			body:  JSON.stringify(data)
		})
		this.get_image()
	}
	
  render() {
    return (
      <section>
      	<Nav/>
      	<div className="rules">
      		Click on your favorite cats to vote for him :)
      	</div>
      	<div className="box">
      		<div className="box_left">
      			<img onClick={() => this.vote_image(1)} className="image" src={this.state.url1} alt="chat1"></img>
      		</div>
      		<div className="box_right">
      			<img onClick={() => this.vote_image(2)} className="image" src={this.state.url2} alt="chat2"></img>
      		</div>
      	</div>
      </section>
    );
  }
}

export default Home;