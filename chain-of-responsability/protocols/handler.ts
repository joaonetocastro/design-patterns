import { Request } from "./request";

export interface Handler <Type> {
    next: Handler<Type> | null;

    handle(request: Request): Promise<Type>;
    setNext(handler: Handler<Type>): void;
}