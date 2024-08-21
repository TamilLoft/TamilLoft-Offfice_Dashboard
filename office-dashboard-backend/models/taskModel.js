import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        deadline: { type: Date, required: true },
        status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], required: true },
        importance: { type: Number, required: true }, // You can define a range like 1-5
        assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user the task is assigned to
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Task = mongoose.model('Task', taskSchema);

export default Task ;

