import {
    Body,
    ContentType,
    Controller,
    CurrentUser,
    Get,
    NotFoundError,
    Post, UseBefore
} from "routing-controllers";
import {getRepository, Repository} from "typeorm";
import {LogToken} from "../entity/LogToken";
import {AuthService} from "../service/AuthService";
import {Users} from "../entity/Users";
import {oauth_clients} from "../entity/oauth_clients";
import {authorizationMiddleware} from "../middleware/functions";


@Controller('/auth')
export class AuthController {

    userRepository: Repository<Users>;
    logRepository: Repository<LogToken>;
    authClientRepository: Repository<oauth_clients>;

    constructor() {
        this.userRepository = getRepository(Users);
        this.logRepository = getRepository(LogToken);
        this.authClientRepository = getRepository(oauth_clients);
    }

    @Post('/token')
    @ContentType('application/json')
    async auth(@Body() body: any) {

        //Validar Cliente
        let authCliente = await this.authClientRepository.findOne({
            ID: body.client_id,
            Secret: body.client_secret
        });
        if (!authCliente)
            throw new NotFoundError();

        // Validar Usuario
        let user = await this.userRepository.findOne({
            where: {Username: body.username, Pass: body.password}
        });
        if (!user)
            throw new NotFoundError();

        // Guardar Log
        let code = AuthService.getToken();
        let logToken = await this.logRepository.save({
            Token: code,
            IDUsers: user.ID
        });
        return {
            type: 'Bearer',
            token: AuthService.authToken(code, authCliente),
            expired: logToken.expire_at
        };
    }

    @Get('/users')
    @UseBefore(authorizationMiddleware)
    getUserSession(@CurrentUser() user: any) {
        return user;
    }
}