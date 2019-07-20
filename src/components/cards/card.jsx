import React from 'react'
import './CardList.css'

export const Card = props => (
	<div className="card-container">
		<img
			alt="monster"
			src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
		/>
		<h2 className="monster-name"> {props.monster.name}</h2>
		<h3 className="user-name"> {props.monster.username}</h3>
		<h4 className="email">{props.monster.email}</h4>
	</div>
)
