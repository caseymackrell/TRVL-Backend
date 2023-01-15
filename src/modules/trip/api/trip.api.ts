import { Request, Response } from 'express';
import Trip, { TripDocument } from '../db/trip.db';



export const bookTrip = async (req: Request, res: Response) => {
    try {
        const tripData: TripDocument = req.body;
        const newTrip = new Trip(tripData);
        await newTrip.save();
        res.status(201).send(newTrip);
    } catch (error) {
        res.status(400).send(error);
    }
}


export const getTrip = async (req: Request, res: Response) => {
try {
const { id } = req.params;
const trip = await Trip.findById(id);
if (!trip) {
return res.status(404).send('Trip not found');
}
res.status(200).send(trip);
} catch (error) {
res.status(400).send(error);
}
}