import express from 'express';
import path from 'path';
import cors from 'cors';
import pd from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import corsOptions from './config/corsOptions.js';
import { loger } from './middleware/logemodule.js';
import errorHandlers from './middleware/errorhandler.js';
import mainRoute from './routes/mainRoute.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use(cookieParser());
app.use(loger); // error catch function
app.use(pd.json());
app.use(errorHandlers); // error catch function
app.use(cors(corsOptions));
app.use(pd.urlencoded({ extended: false }));

// Routes
app.use(mainRoute);

// Hoster
app.listen(port, () => {
    console.log(`Project host ON: http://localhost:${port}`);
});



