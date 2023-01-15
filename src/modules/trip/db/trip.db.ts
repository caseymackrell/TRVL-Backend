import mongoose from 'mongoose'

export interface TripDocument extends mongoose.Document {
    _id: string
    firstName: string
    lastName: string
    location: string
    dateRange:string
}
const tripSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId, required: true, auto: true },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    location: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true}
})

const Trip = mongoose.model<TripDocument>('trip', tripSchema)

export default Trip
