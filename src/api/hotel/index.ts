import { Router } from 'express';
import { handleAllGetHotels, handleGetHotelById } from './hotel.controller';

const router = Router();

// GET /api/hotels
router.get('/', handleAllGetHotels);
// GET /api/products/:id
router.get('/:id', handleGetHotelById);


export default router;