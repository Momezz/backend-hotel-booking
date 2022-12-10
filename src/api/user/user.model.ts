import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
  role: 'USER' | 'ADMIN';
  name: string;
  email: string;
  password: string;
  profilePic?: string;
  birthday: Date;
  gender?: string;
  address?: string;
  city?: string;
  zipCode?: number;
}

const UserSchema = new Schema ({
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 10,
  },
  profilePic: {
    type: String,
  },
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['female', 'masculine', 'other'],
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
})

const User = model<UserDocument>('User', UserSchema);

export default User;
