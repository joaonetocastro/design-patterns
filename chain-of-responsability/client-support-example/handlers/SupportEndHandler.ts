import { Handler } from '../../protocols/handler';
import { Request } from '../../protocols/request';
import {Response} from '../protocols/response'

export class SupportEndHandler implements Handler<Response> {
    async handle(_request: Request): Promise<Response> {
        return {
            status: 500,
            message: 'We are having problem to process your request, please try again later'
        }
    }
}