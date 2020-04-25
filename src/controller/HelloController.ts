import {Get, JsonController} from "routing-controllers";
import {getRepository} from "typeorm";
import {Productos} from "../entity/Productos";

@JsonController('/productos')
export class HelloController {
    @Get('')
    getHello() {
        return getRepository(Productos).find();
    }
}
