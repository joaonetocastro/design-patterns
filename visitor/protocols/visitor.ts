export interface Visitor<T> {
    visitItems(items: any[]): T;
}