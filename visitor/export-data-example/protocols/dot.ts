import { VisitorItem } from "../../protocols/visitor";
import { ExtractDataVisitor, ExtractDataVisitorResponse } from "../extract-data-visitor";

export class Dot implements VisitorItem<ExtractDataVisitorResponse>{
    constructor(readonly radius: number) {}
    
    extractDataForVisitor(visitor: ExtractDataVisitor): ExtractDataVisitorResponse {
        return visitor.extractForDot(this)
    }
}