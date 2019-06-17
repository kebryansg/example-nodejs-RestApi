import {AuthService} from "../service/AuthService";
import {getRepository} from "typeorm";
import {LogToken} from "../entity/LogToken";
import {Request, Response} from "express";

export async function authorizationMiddleware(request: Request, response: Response, next?: (err?: any) => any): Promise<any> {
    let token = request.headers["authorization"] as string;
    if (!token) return response.status(404).send('Not Found Headers [authorization]');

    token = token.split(' ')[1];
    token = AuthService.decodeToken(token);
    if (!token) return response.status(404).send('Invalid token');

    let logToken = await getRepository(LogToken).findOne({Token: token});
    if (logToken)
        next();
    else
        return response.status(404).send('Invalid token');
}