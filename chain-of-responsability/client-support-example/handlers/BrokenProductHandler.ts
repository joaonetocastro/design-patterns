import { Handler } from '../../protocols/handler';
import { Request } from '../../protocols/request';
import {Response} from '../protocols/response'

export class BrokenProductHandler implements Handler<Response> {
    next: Handler<Response> | null = null;

    async handle(request: Request): Promise<Response> {
        if(request?.body?.category === 'brokenProduct') {
            return {
                status: 200,
                message: `Send your ${request.body.productName} to us and we will fix it :)`
            }
        }
        if(!this.next){
            return {
                status: 500,
                message: 'We are having problem to process your request, please try again later'
            }
        }
        return this.next.handle(request)
    }

    setNext(handler: Handler<Response>): void {
        this.next = handler;
    }
}