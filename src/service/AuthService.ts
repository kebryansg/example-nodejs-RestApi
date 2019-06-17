import {Service} from "typedi";
import {oauth_clients} from "../entity/oauth_clients";

let jws = require('jws');
let crypto = require('crypto');

@Service()
export class AuthService {

    constructor() {
    }

    static getToken(size: number = 64) {
        return crypto.randomBytes(size).toString('hex');
    }

    static decodeToken(token: string) {
        let result = jws.decode(token);
        return (result)? result.payload : null;
    }

    static authToken(code: string, cliente: oauth_clients) {
        return jws.sign({
            header: {alg: 'HS256'},
            payload: code,
            secret: cliente.Secret
        });
    }


}