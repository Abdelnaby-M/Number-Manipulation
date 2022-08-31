import express from 'express';
import { basicOperation, validator } from '../services/manipulation';

const routesIndex: express.Router = express.Router();


routesIndex.post('/manipulation',
    (request: express.Request, response: express.Response): void => {


        const validationMessage: null | string = validator(request.body);
        if (validationMessage) response.json(validationMessage);
        
        else{const results = basicOperation(request.body.firstNumber, request.body.secondNumber);
        response.json(results);}
    
});

export default routesIndex;