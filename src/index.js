import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

// config imports
import { connectToDatabase } from './config/dbConnection.js';

// middleware imports
import { authMiddleware } from './middleware/authMiddleware.js';
import { errorHandlerMiddleWare } from './middleware/errorHandlerMiddleware.js';

// routes imports
import authRouter from './routes/auth.js';
import historyRouter from './routes/history.js';
import convertRouter from './routes/conversion.js';


// dotenv initialization
dotenv.config();

// the app instance
const app = express();

// constant values
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

// configuration middleware
app.use(cors());
app.use(express.json());


// api routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/history', authMiddleware, historyRouter);
app.use('/api/v1', authMiddleware, convertRouter);
;

// error handling middleware
app.use(errorHandlerMiddleWare);

// starting the server
const startServer = async () => {
  app.listen(port, () => console.log(`Server Started At ${port}`));
};

connectToDatabase(mongoUri, startServer);
