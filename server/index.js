import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv, { config } from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

//const CONNECTION_URL = 'mongodb://keshava04:krd123@cluster0-shard-00-00.sk1e1.mongodb.net:27017,cluster0-shard-00-01.sk1e1.mongodb.net:27017,cluster0-shard-00-02.sk1e1.mongodb.net:27017/?ssl=true&replicaSet=atlas-1264qv-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL).then(() => app.listen(PORT, () => console.log('Server running on port: %d', PORT)));
    // .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
//mongodb+srv://keshava04:<password>@cluster0.sk1e1.mongodb.net/?retryWrites=true&w=majority