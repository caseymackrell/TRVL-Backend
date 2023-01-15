import { Router } from 'express'
import { bookTrip, getTrip } from './api/trip.api'


export const tripRouter = Router()

tripRouter.post(
	'/',
	bookTrip
)

tripRouter.get(
    '/:id', getTrip
)