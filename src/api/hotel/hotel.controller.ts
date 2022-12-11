import { Request, Response, NextFunction } from "express";
import { getAllHotels, getHotelById } from "./hotel.services";

export async function handleAllGetHotels(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const hotels = await getAllHotels();
    return res.status(200).json(hotels);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetHotelById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const hotel = await getHotelById(id);

  if (!hotel) {
    return res.status(404).json({ message: "Hotel not found" });
  }

  return res.status(200).json(hotel);
}
