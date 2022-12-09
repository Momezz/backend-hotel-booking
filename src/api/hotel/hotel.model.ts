import { Schema, model } from "mongoose";

const hotelLocationSchema = new Schema({
  country: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  latitude: {
    type: String,
    require: true,
  },
  longitude: {
    type: String,
    require: true,
  },
});

const hotelContactSchema = new Schema({
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  socialMedia: {
    type: Array,
  },
});

const offerSchema = new Schema({
  active: {
    type: Boolean,
    require: true,
  },
  offerPrice: {
    type: Number,
    require: true,
  },
});

const hotelSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  images: {
    type: Array,
    require: true,
  },
  location: {
    type: hotelLocationSchema,
    require: true,
  },
  contact: {
    type: hotelContactSchema,
  },
  about: {
    type: String,
    require: true,
  },
  pricePerNight: {
    type: Number,
    require: true,
  },
  features: {
    type: Array,
  },
  checkin: {
    type: String,
    require: true,
  },
  checkout: {
    type: String,
    require: true,
  },
  offers: [{
    type: offerSchema,
  }],
});

const Hotel = model('Hotel', hotelSchema);

export default Hotel;
