import { Handler } from '../../protocols/handler';
import { Request } from '../../protocols/request';
import { Response } from '../protocols/response'

export class SupportHandler implements Handler<Response> {
    constructor(private readonly next: Handler<Response>) {}
    
    async handle(request: Request): Promise<Response> {
        if(!request?.body?.category || !this.next) {
            return {
                status: 400,
                message: 'Bad Request'
            }
        }
        return this.next.handle(request)
    }
}