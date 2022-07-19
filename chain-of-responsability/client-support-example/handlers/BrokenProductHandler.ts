import { Handler } from '../../protocols/handler';
import { Request } from '../../protocols/request';
import {Response} from '../protocols/response'

export class BrokenProductHandler implements Handler<Response> {
    constructor(private readonly next: Handler<Response>) {}

    async handle(request: Request): Promise<Response> {
        if(request?.body?.category === 'brokenProduct') {
            return {
                status: 200,
                message: `Send your ${request.body.productName} to us and we will fix it :)`
            }
        }
        return this.next.handle(request)
    }
}