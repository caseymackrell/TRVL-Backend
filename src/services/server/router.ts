import { Application } from 'express'
import { tripRouter } from '../../modules/trip'
import response from './response'
import cors from 'cors'

const router = (app: Application) => {
	// Local modules
	app.use(cors({
  origin: 'http://localhost:3001'
}))
	app.use('/trip', tripRouter)
	// Root & global route
	app.get('/', (_, res) => response({ res }))
	app.get('*', (_, res) => response({ res, status: 404, error: 'Not found' }))
}

export default router