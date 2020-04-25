import "reflect-metadata";
import {createExpressServer, useContainer as routingContainer} from "routing-controllers";
import {createConnection} from "typeorm";
import {Container} from "typedi";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // Add Container
    routingContainer(Container);

    const port = process.env.PORT || 3000;
    // creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
        defaultErrorHandler: true,
        cors: true,
        controllers: [
            __dirname + "/controller/*{.js,.ts}"
        ] // we specify controllers we want to use
    });

    // run express application on port 3000
    app.listen(port, () => {
        // console.log(`server started at http://localhost:${port}`);
    });

}).catch(error => {});
