require('dotenv').config()
import logger from './utils/logger.util'
import server from './services/server'
import connectToDatabase from './services/db'

(async () => {
	try {
		// Setup database
		await connectToDatabase()
		// Start server
		server.listen(process.env.PORT || 3000, () => {
			if (process.env.NODE_ENV === 'development') {
				logger.info(`[Listening] Local: http://${require('os').hostname()}:${process.env.PORT || 3000}`)
			}
		})
	} catch (error) {
		logger.error(error)
	}
})()