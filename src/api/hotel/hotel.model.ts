import { Schema, model, Document } from "mongoose";


export interface HotelDocument extends Document{
  name: String,
  imageProfile?: String,
  images?: Array<String>,
  country: String,
  city: String,
  address: String,
  geoLocation?: Array<String>,
  phone?: Number,
  email?: String,
  socialMedia?: Array<String>,
  about: String,
  pricePerNight: Number,
  feature1?: String,
  feature2?: String,
  checkin?: String,
  checkout?: String,
  facilities?: Array<String>,
  offers?: Array<Object>,
  rooms?: Array<Object>,
  createdAt?: Date;
  updatedAt?: Date;
}

const geoLocationSchema = new Schema({
  type:{
    type: String,
    default: 'Point'
  },
  coordinates:{
    type: Array,
  }
})

const offerSchema = new Schema({
  active: {
    type: Boolean,
  },
  offerPrice: {
    type: Number,
  },
});

const roomAmenitiesSchema = new Schema({
  bedKind: {
    type: String,
    require: true,
  },
  tv: {
    type: String,
  },
  couch: {
    type: Boolean,
  },
  poolView: {
    type: Boolean,
  },
  shower: {
    type: Boolean,
  },
});

const roomSchema = new Schema({
  roomType: {
    type: String,
    require: true,
  },
  roomPrice: {
    type: Number,
    require: true,
  }
});

const hotelSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  imageProfile: {
    type: String,
  },
  images: {
    type: Array,
  },
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
  geoLocation :{
    type: geoLocationSchema
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  socialMedia: {
    type: Array,
  },
  about: {
    type: String,
    require: true,
  },
  pricePerNight: {
    type: Number,
    require: true,
  },
  feature1: {
    type: String,
  },
  feature2: {
    type: String,
  },
  checkin: {
    type: String,
  },
  checkout: {
    type: String,
  },
  facilities: {
    type: Array<String>,
  },
  offers: [
    {
      type: offerSchema,
    },
  ],
  rooms: [{
    type: roomSchema,
  }]
}, {timestamps: true,});

const Hotel = model("Hotel", hotelSchema);

export default Hotel;
