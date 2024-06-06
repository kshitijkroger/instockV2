import express from 'express';
import cors from 'cors';
import apiRoute from './src/routes/api.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.use('/api/', apiRoute)

app.listen(PORT, () => {
    console.log(`Application running on PORT ${PORT}`)
})
