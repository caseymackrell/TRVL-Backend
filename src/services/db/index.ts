import mongoose from 'mongoose'
import logger from '../../utils/logger.util'

async function connectToDatabase() {
	try {
		await mongoose.connect(process.env.DB_URL || '')
		logger.info('Connected to DB')
	} catch (error) {
		logger.error('Could not connect to db', error)
		process.exit(1)
	}
}

export default connectToDatabase