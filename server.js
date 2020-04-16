const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const authRouter = require('express-mongo-auth-routes')

const { expressLogger } = require('./config/logger')

// const InitiateMongoServer = require('./config/db')
// InitiateMongoServer() // eslint-disable-line new-cap

const user = require('./models/user')
const authRoutes = authRouter({ user })

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

const apiRoutes = require('./server/router')

app.prepare().then(() => {
	const server = express()

	// ============ Setup middlewares ==============
	server.use(bodyParser.json())
	server.use(expressLogger)

	// ============= API Routes ====================
	server.use('/api', apiRoutes)
	server.use('/auth', authRoutes)

	// ============ NextJS routes ==================
	server.get('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, err => {
		if (err) {
			throw err
		}

		console.log(`Server running on http://localhost:${3000}`)
	})
})
