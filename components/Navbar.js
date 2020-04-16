import React from 'react'
import Link from 'next/link'
import Logo from '../svg/logo'

const Navbar = () => {
	return (
		<header className="sticky top-0 bg-white shadow">
			<div className="container flex flex-col sm:flex-row justify-between sm:items-center mx-auto py-4 px-8">
				<div className="flex justify-center text-2xl">
					<Link href="/">
						<a>
							<Logo className="h-16 w-24"/>
						</a>
					</Link>
				</div>
				<div className="flex mt-4 sm:mt-0 justify-center">
					<div className="px-4 text-blue-600 hover:text-blue-800 transform hover:scale-110">
						<Link href="/about"><a>About</a></Link>
					</div>
					<div className="px-4 text-blue-600 hover:text-blue-800 transform hover:scale-110">
						<Link href="/privacy"><a>Privacy</a></Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar

