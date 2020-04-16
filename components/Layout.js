import React from 'react'
import Navbar from './Navbar'

const Index = ({ children }) => {
	return (
		<div>
			<Navbar/>
			{ children }
		</div>
	)
}

export default Index
