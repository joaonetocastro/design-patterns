import { Request } from "./request";

export interface Handler <Type> {
    handle(request: Request): Promise<Type>;
}