import React from 'react';
import List from './listContainer';

export default class Board extends React.Component {
	
	render() {
		return (
			<div className="board">
				<h1>Board Title</h1>
				<List listTitle="List Title" />
				<List listTitle="List Title" />
				<List listTitle="List Title" />
			</div>
		);
	}
}