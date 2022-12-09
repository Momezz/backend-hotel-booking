import { Router } from 'express';
import {handleAllGetHotels } from './hotel.controller';

const router = Router();

// GET /api/hotels
router.get('/', handleAllGetHotels);


export default router;