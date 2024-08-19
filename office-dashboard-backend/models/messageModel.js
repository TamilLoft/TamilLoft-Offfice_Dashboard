import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
    }
);

const Message = mongoose.model('Message', userSchema);

export default { Message }; // Export the User model correctly
