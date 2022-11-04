import { VisitorItem } from "../../protocols/visitor";
import { ExtractDataVisitor, ExtractDataVisitorResponse } from "../extract-data-visitor";

export class Square implements VisitorItem<ExtractDataVisitorResponse>{
    constructor(readonly width: number) {}
    extractDataForVisitor(visitor: ExtractDataVisitor): ExtractDataVisitorResponse {
        return visitor.extractForSquare(this)
    }
}