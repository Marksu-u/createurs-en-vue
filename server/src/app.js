import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import connectToDatabase from './mongodb.js';

dotenv.config();
connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/api/login', router);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Serveur NodeJS sur le port ${port}...`));