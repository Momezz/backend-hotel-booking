import Hotel from "./hotel.model";

export function getAllHotels() {
  return Hotel.find({});
}

export function getHotelById(id: string) {
  return Hotel.findById(id)
}
