import {MigrationInterface, QueryRunner} from "typeorm";
import {oauth_clients} from "../entity/oauth_clients";
import {AuthService} from "../service/AuthService";

export class OauthClients1560722323885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let count = await queryRunner.manager.count(oauth_clients);
        if (count == 0) {
            console.log('Init Access Clients');
            await queryRunner.manager.insert(oauth_clients, [
                {
                    Name: 'Personal Access Client', Secret: AuthService.getToken(32)
                },
                {
                    Name: 'Password Grant Client', Secret: AuthService.getToken(32)
                }
            ]);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
