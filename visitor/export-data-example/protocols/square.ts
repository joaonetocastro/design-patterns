import { ExtractDataVisitor, ExtractDataVisitorItem, ExtractDataVisitorResponse } from "../extract-data-visitor";

export class Square implements ExtractDataVisitorItem{
    constructor(readonly width: number) {}
    extractDataForVisitor(visitor: ExtractDataVisitor): ExtractDataVisitorResponse {
        return visitor.extractForSquare(this)
    }
}