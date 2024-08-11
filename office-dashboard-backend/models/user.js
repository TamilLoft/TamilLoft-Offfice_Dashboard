import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    phone: { type: Number, required: true, unique: true, length: 10 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

export { User }; // Export the User model correctly
