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

apiRoute.get('/incident/:incidentNumber', async (req, res) => {
    const incidentDetails = await Incident(req.params['incidentNumber'].toUpperCase());

    if (incidentDetails.statusCode === 200)
        res.render('IncidentDetail.ejs', incidentDetails.data)
    else
        res.send("Error")
});

export default apiRoute;
