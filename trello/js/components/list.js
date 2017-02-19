import React from 'react';
import Card from './card';

export default class List extends React.Component {
	/*
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		this.onClick = this.onClick.bind(this);
	}
	

	onClick() {
		this.setState({
			highlist: !this.state.highlight
		});
	}
	*/
	handleSubmit(event) {
		console.log('okay!');
	}
	
	handleChange(event) {
		event.preventDefault();
		console.log('yes?');
	}

	render() {
		return (
			<div className="list">
				<h3 className="listTitle">{this.props.listTitle}</h3>
				<Card content="This is a card." />
				<Card content="This is a card." />
				<Card content="This is a card." />
				<input type="text" onChange={this.handleChange} />
				<button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
			</div>
		);
	}
}