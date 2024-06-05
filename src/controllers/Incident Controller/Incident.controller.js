import axios from 'axios';
import dotenv from 'dotenv';
import { INC6028019, INC6050882, INC6070530 } from '../../constants/krogerURLConstant.js';

dotenv.config();

const Incident = async (req, res) => {

    const incidentNumber = req.params['incidentNumber'];

    try {

        if(incidentNumber === 'INC6070530')
            res.send(INC6070530);
        else if (incidentNumber === 'INC6028019')
            res.send(INC6028019)
        else if (incidentNumber === 'INC6050882')
            res.send(INC6050882)
        else 
            res.send({})

    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

export default Incident;