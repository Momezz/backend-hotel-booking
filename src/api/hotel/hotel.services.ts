import Hotel from "./hotel.model";

export function getAllHotels(){
    return Hotel.find({})
  }