import express from 'express';
import Incident from '../controllers/Incident Controller/Incident.controller.js';

const apiRoute = express.Router();

apiRoute.get('/test', (req, res) => {
    const response = {
        statusCode: 200,
        responseMessage: "Application Tested successfully!"
    };
    res.send(response);
})

apiRoute.get('/incident/:incidentNumber', Incident);

export default apiRoute;
