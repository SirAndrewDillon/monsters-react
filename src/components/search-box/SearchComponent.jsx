import React from 'react'
import '../search-box/SearchComponent.css'

export const SearchComponent = ({ placeholder, handleChange }) => (
	<input
		className="search"
		type="search"
		large="true"
		placeholder="Locate Monsters"
		onChange={handleChange}
	/>
)
