import React from 'react'

const Paragraph = ({ children }) => {
	return (
		<div className="container flex flex-col sm:flex-row justify-between sm:items-center mx-auto py-4 px-8 text-justify">
			<p className="text-gray-800">
				{ children }
			</p>
		</div>
	)
}

export default Paragraph
