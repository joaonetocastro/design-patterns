import { ExtractDataVisitor, ExtractDataVisitorItem, ExtractDataVisitorResponse } from "../extract-data-visitor";

export class Dot implements ExtractDataVisitorItem{
    constructor(readonly radius: number) {}
    
    extractDataForVisitor(visitor: ExtractDataVisitor): ExtractDataVisitorResponse {
        return visitor.extractForDot(this)
    }
}