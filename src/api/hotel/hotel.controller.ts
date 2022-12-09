import { Request, Response, NextFunction } from "express";
import { getAllHotels } from "./hotel.services";

export async function handleAllGetHotels(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.body);
  try {
    const hotels = await getAllHotels();
    return res.status(200).json(hotels);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}