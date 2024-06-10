import axios from 'axios';
import { INC6028019, INC6050882, INC6070530 } from '../../constants/krogerURLConstant.js';

const Incident = async (req, res) => {

    const incidentNumber = req.params['incidentNumber'];

    try {
        if(incidentNumber === 'INC6070530')
            res.send(INC6070530.result[0]);
        else if (incidentNumber === 'INC6028019')
            res.send(INC6028019.result[0])
        else if (incidentNumber === 'INC6050882')
            res.send(INC6050882.result[0])
        else 
            res.send({statusCode: 404, statusMessage: "Incident not found"})    //Error
    } catch (err) {
        // console.log(err);
        res.send(err);
    }
}

export default Incident;
