import axios from 'axios';
import { INC6028019, INC6050882, INC6070530 } from '../../constants/krogerURLConstant.js';

const Incident = async (incidentNumber) => {

    let incidentDetails = {}

    if (incidentNumber === 'INC6070530')
        incidentDetails = { statusCode: 200, data: INC6070530.result[0] };
    else if (incidentNumber === 'INC6028019')
        incidentDetails = { statusCode: 200, data: INC6028019.result[0] };
    else if (incidentNumber === 'INC6050882')
        incidentDetails = { statusCode: 200, data: INC6050882.result[0] };
    else
        incidentDetails = { statusCode: 404, statusMessage: "Incident not found" }    //Error

        return incidentDetails;
}

export default Incident;
