import express from 'express';
import { webView, userLog } from '../controllers/usercontroller.js';

const router = express.Router();

// Normal GET route
router.get('/', webView);

// Example route using userLog
router.post('/login', userLog);

export default router;
