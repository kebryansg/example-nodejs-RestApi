import "reflect-metadata";
import {Action, createExpressServer, useContainer as routingContainer} from "routing-controllers";
import {AuthController} from "./controller/index.controller";
import {createConnection, getRepository} from "typeorm";
import {LogToken} from "./entity/LogToken";
import {Container} from "typedi";
import {AuthService} from "./service/AuthService";
import {Users} from "./entity/Users";

// let {settings} = require('../assets/init.js');
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT;

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // Add Container
    routingContainer(Container);

    // Run Migration
    await connection.runMigrations();

    // creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
        defaultErrorHandler: false,
        cors: true,
        // authorizationChecker: async (action: Action, roles: string[]) => {
        //     let token = action.request.headers["authorization"] as string;
        //     if (!token) return false;
        //     token = token.split(' ')[1];
        //     token = AuthService.decodeToken(token);
        //     if (!token) return false;
        //     let logToken = await getRepository(LogToken).findOne({Token: token});
        //     return !!logToken;
        // },
        currentUserChecker: async (action: Action) => {
            let token = action.request.headers["authorization"] as string;
            if (!token) return null;
            token = token.split(' ')[1];
            let logToken = await getRepository(LogToken).findOne({Token: AuthService.decodeToken(token)});
            if (logToken)
                return await getRepository(Users).findOne(logToken.IDUsers);
            return null;
        },
        controllers: [
            AuthController
        ] // we specify controllers we want to use
    });

    // run express application on port 3000
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });

}).catch(error => console.log("TypeORM connection error: ", error));
