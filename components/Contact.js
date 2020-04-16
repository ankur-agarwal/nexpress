import React, { useState } from 'react'

const subject = 'Syndata: Enquiry'
const emailAddress = 'syndata@think-privacy.com'

const Index = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [company, setCompany] = useState('')
	const [message, setMessage] = useState('')
	const [addToMailList, setAddToMailList] = useState(false)

	function validateEmail(email) {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
	}

	function handleFormSubmit(event) {
		if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || message.trim() === '') {
			window.alert('Please fill all mandatory fields!')
			return
		}

		if (!validateEmail(email)) {
			window.alert('Please enter valid email address!')
			return
		}

		event.preventDefault()
		const body = `First Name: ${firstName} \n\nLastName: ${lastName} \n\nEmail: ${email}\n\n Company: ${company}\n\n Message: ${message} \n\n Add to mailing list: ${addToMailList}`
		const mailToLink = `mailto:${emailAddress}?subject=${subject}&body=${encodeURIComponent(body)}`
		window.location.href = mailToLink
	}

	return (
		<section className="flex px-8 py-4 justify-center mt-4">
			<form className="w-full max-w-lg">
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full px-3 mb-6 text-gray-700 font-bold">
						Please complete the following form to receive further information:
					</div>
					<div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
							First Name <span className="text-red-600">*</span>
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-first-name"
							type="text"
							value={firstName}
							onChange={event => setFirstName(event.target.value)}
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
							Last Name <span className="text-red-600">*</span>
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							value={lastName}
							onChange={event => setLastName(event.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
							E-mail <span className="text-red-600">*</span>
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="email"
							type="email"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
							Company
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="email"
							type="text"
							value={company}
							onChange={event => setCompany(event.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full px-3">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
							Message <span className="text-red-600">*</span>
						</label>
						<textarea
							className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
							id="message"
							value={message}
							onChange={event => setMessage(event.target.value)}
						/>
						<div className="flex flex-row">
							<input
								className="mr-2"
								type="checkbox"
								checked={addToMailList}
								onChange={event => setAddToMailList(event.target.checked)}
							/>
							<p className="text-gray-600 text-xs">I would like to be added to your mail list to receive direct marketing by email</p>
						</div>
					</div>
				</div>
				<div className="md:flex md:items-center">
					<div className="md:w-1/3">
						<button
							className="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 mt-2 rounded"
							type="button"
							onClick={handleFormSubmit}
						>
							Send
						</button>
					</div>
					<div className="md:w-2/3"/>
				</div>
			</form>
		</section>
	)
}

export default Index
