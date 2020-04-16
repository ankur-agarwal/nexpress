import React from 'react'

function Hamburger({ className }) {
	return (
		<svg
			className={className || ''}
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			enableBackground="new 0 0 32 32"
			version="1.1"
			viewBox="0 0 32 32"
			xmlSpace="preserve"
		>
			<path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z" />
		</svg>
	)
}

export default Hamburger
