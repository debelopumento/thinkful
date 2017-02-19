import React from 'react';

export default function Card(props) {
	return (
		<div className="card">
			<p className="cardContent">{props.content}</p>
		</div>
	);
}