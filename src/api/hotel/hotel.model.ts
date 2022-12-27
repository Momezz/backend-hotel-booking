import { Schema, model, Document } from "mongoose";

export interface HotelDocument extends Document{
  name?: String,
  imageProfile?: String,
  images?: Array<String>,
  location?: Object,
  contact?: Object,
  about?: String,
  pricePerNight?: Number,
  feature1?: String,
  feature2?: String,
  checkin?: String,
  checkout?: String,
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
  geoLocation :{
    type: geoLocationSchema
  }
  },
);

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
  _roomId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  guestNumber: {
    type: Number,
    require: true,
    min: 1,
  },
  name: {
    type: String,
    require: true,
  },
  about: {
    type: String,
  },
  roomImages: {
    type: Array,
    require: true,
  },
  features: {
    type: Array,
  },
  price: {
    type: Number,
    require: true,
  },
  amenities: {
    type: roomAmenitiesSchema,
    require: true,
  },
  offers: [
    {
      type: offerSchema,
    },
  ],
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
  location: {
    type: hotelLocationSchema,
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
