import Hotel, {HotelDocument} from "./hotel.model";
import {DocumentDefinition} from 'mongoose';

export function getAllHotels() {
  return Hotel.find({});
}

export function getHotelById(id: string) {
  return Hotel.findById(id)
}

export function createHotel (input: DocumentDefinition<Omit<HotelDocument, 'createdAt' | 'updatedAt'>>,){
  return Hotel.create(input)

}