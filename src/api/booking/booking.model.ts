import { Schema, model, Document } from 'mongoose';

export interface BookingDocument extends Document {
  name: String,
  lastName: String,
  email: String,
  contact: String,
  specialRequest: String,
  promoCode: String
}

const BookingSchema = new Schema({
  idHotel: {
    type: Schema.Types.ObjectId,
    ref: 'Hotel',
  },
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  specialRequest: {
    type: String,
    default: "no special requirements"
  },
  promoCode: {
    type: String,
    default: "Does not apply",
    unique: true,
    required: false,
  },
},{
  timestamps: true,
  versionKey: false,
});

const Booking = model<BookingDocument>('Booking', BookingSchema);

export default Booking;
