import express from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';//user controller
import { createMessage, getMessages, deleteMessage } from '../controllers/messageController.js';//message related
import { createTask, getAllTasks, getTasksForUser, updateTask, deleteTask } from '../controllers/taskController.js';///task related
const router = express.Router();

///user Login

router.post('/users', createUser);// Create a new user
router.get('/users', getAllUsers);// Get all users
router.get('/users/:id', getUserById);// Get a single user by ID
router.put('/users/:id', updateUser);// Update a user by ID
router.delete('/users/:id', deleteUser);// Delete a user by ID


///task related
router.post('/tasks', createTask);// Create a new task
router.get('/tasks', getAllTasks);// Get all tasks
router.get('/tasks/user/:userId', getTasksForUser);// Get tasks for a specific user
router.put('/tasks/:id', updateTask);// Update a task
router.delete('/tasks/:id', deleteTask);// Delete a task



///message related
router.post('/messages', createMessage);// Create a message
router.get('/messages/:userId1/:userId2', getMessages);// Get messages between two users
router.delete('/messages/:id', deleteMessage);// Delete a message

export default router;
