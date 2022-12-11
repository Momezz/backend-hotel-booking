import { Request, Response, NextFunction } from "express";
import { getAllHotels, getHotelById, createHotel } from "./hotel.services";

export async function handleGetAllHotels(
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

export async function handleCreateHotel(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  console.log (data);

  try {
    const newHotel = await createHotel(data);
    return res.status(201).json(newHotel);
  } catch (error) {
    return res.status(500).json(error);
  }
}
