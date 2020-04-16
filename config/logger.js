const pino = require('pino')
const expressPino = require('express-pino-logger')

const logger = pino({ level: process.env.LOG_LEVEL || 'info' })
const expressLogger = expressPino({ logger })

// =============== Handle crashes ==============
process.on('uncaughtException', pino.final(logger, (err, finalLogger) => {
	finalLogger.error(err, 'uncaughtException')
	process.exit(1)
}))

process.on('unhandledRejection', pino.final(logger, (err, finalLogger) => {
	finalLogger.error(err, 'unhandledRejection')
	process.exit(1)
}))

module.exports = {
	logger,
	expressLogger
}
