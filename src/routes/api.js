import express from 'express';
import Incident from '../controllers/Incident Controller/Incident.controller.js';

const apiRoute = express.Router();

apiRoute.get('/test', (req, res) => {
    res.send("Application Tested successfully!")
})

apiRoute.get('/incident/:incidentNumber', Incident);

export default apiRoute;