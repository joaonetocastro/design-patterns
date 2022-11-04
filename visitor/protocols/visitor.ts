export interface Visitor<T> {
    visitItems(items: any[]): T;
}

export interface VisitorItem<T> {
    extractDataForVisitor(visitor: Visitor<any>): T
}