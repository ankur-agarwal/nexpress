const mongoose = require('mongoose')

// Replace this with your MONGOURI.
const MONGOURI = 'mongodb://localhost/node-auth'

const InitiateMongoServer = async () => {
	try {
		await mongoose.connect(MONGOURI, {
			useNewUrlParser: true
		})
		console.log('Connected to DB !!')
	} catch (error) {
		console.log(error)
		throw error
	}
}

module.exports = InitiateMongoServer
