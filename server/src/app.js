import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import userRoutes from './routes/user.routes.js';

import connectToDatabase from './middlewares/mongodb.middleware.js';

dotenv.config();
connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

// app.use('login', logRoutes);
app.use('user', userRoutes)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Serveur NodeJS sur le port ${port}...`));