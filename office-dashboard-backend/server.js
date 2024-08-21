import express from 'express';
import cors from 'cors';
import pd from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import corsOptions from './config/corsOptions.js';
import { loger } from './middleware/logemodule.js';
import errorHandlers from './middleware/errorhandler.js';
import mainRoute from './routes/mainRoute.js';

import connectToDatabase from '../office-dashboard-backend/database/connection.js';

dotenv.config();

const app = express();
const port = 3000;

// Apply middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(pd.json());
app.use(pd.urlencoded({ extended: false }));

// Custom middleware
app.use(loger);

// Connect to the database and set up routes
connectToDatabase().then(() => {
    app.use(mainRoute);

    // Error handling middleware should be placed after the routes
    app.use(errorHandlers);

    // Start the server only after the database connection is established
    app.listen(port, () => {
        console.log(`Project host ON: http://localhost:${port}`);
    });
}).catch(error => {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process if the database connection fails
});
