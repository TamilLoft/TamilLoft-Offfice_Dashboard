import Message from '../models/messageModel.js';

// Create a new message
export const createMessage = async (req, res) => {
    try {
        const { sender, receiver, content } = req.body;
        const message = new Message({ sender, receiver, content });
        await message.save();
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all messages between two users
export const getMessages = async (req, res) => {
    try {
        const { userId1, userId2 } = req.params;
        const messages = await Message.find({
            $or: [
                { sender: userId1, receiver: userId2 },
                { sender: userId2, receiver: userId1 }
            ]
        }).sort('timestamp');
        res.status(200).json(messages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a message
export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        await Message.findByIdAndDelete(id);
        res.status(204).json({ message: 'Message deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
