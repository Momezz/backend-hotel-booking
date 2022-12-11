import { Router } from "express";
import {
  handleGetAllHotels,
  handleGetHotelById,
  handleCreateHotel,
} from "./hotel.controller";

const router = Router();

// GET /api/hotels
router.get("/", handleGetAllHotels);
// GET /api/hotels/:id
router.get("/:id", handleGetHotelById);
// POST /api/hotels
router.post("/", handleCreateHotel);

export default router;
