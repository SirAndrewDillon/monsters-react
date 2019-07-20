import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/cards/CardList'
import { SearchComponent } from './components/search-box/SearchComponent'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: [],
			searchField: ''
		}
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value })
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }))
	}

	render() {
		const { monsters, searchField } = this.state
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		)
		return (
			<div className="App">
				<h1 className="monster-text">Monsters Rolodex</h1>
				<SearchComponent handleChange={this.handleChange} />
				<CardList monsters={filteredMonsters} />
			</div>
		)
	}
}
