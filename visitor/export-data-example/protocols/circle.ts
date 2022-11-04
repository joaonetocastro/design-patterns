import { ExtractDataVisitor, ExtractDataVisitorItem, ExtractDataVisitorResponse } from "../extract-data-visitor";

export class Circle implements ExtractDataVisitorItem{
    constructor(readonly radius: number) {}

    extractDataForVisitor(visitor: ExtractDataVisitor): ExtractDataVisitorResponse {
        return visitor.extractForCircle(this)
    }
}