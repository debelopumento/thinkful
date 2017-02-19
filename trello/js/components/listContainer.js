import React from 'react';
import Card from './card';

export default class ListClass extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			cardArray: [],
			newCardContent: ''
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}
	

	handleSubmit(event) {
		console.log('okay!');
		
		event.preventDefault();
		let localCardArray = this.state.cardArray;
		localCardArray.push({content: this.state.newCardContent});
		this.setState({cardArray: localCardArray});
		
		console.log(1, this.state);
		let cards = null;
		this.state.cardArray.forEach(function(card) {
			console.log(4, card);
		});

	}
	
	handleChange(event) {
		this.setState({newCardContent: event.target.value});
		//console.log(event.target.value);
	}

	

	render() {
		return (
			<div>
				<h3>List Title</h3>
				<List cards={this.state.cardArray} />
				<input name="cardContent" type="text" onChange={this.handleChange}/>
				<button type="submit" value="Submit" onClick={this.handleSubmit}>Add a Card</button>
			</div>
		);
	}


}


export function List(props) {
	console.log(2, props.cards);
	
	const cardsHtml = props.cards.map(card => (
		<li key={card.id}>{card.content}</li>
	));
	
	return (
		<div>
		<ul>{cardsHtml}</ul>
		
		</div>
	);
}


