import { Visitor, VisitorItem } from "../protocols/visitor";
import { Circle } from "./protocols/circle";
import { Dot } from "./protocols/dot";
import { Square } from "./protocols/square";

export interface ExtractDataVisitorResponse {
    type: string
    width?: number;
    height?: number;
    radius?: number
}

export class ExtractDataVisitor implements Visitor<ExtractDataVisitorResponse[]> {
    visitItems(items: VisitorItem<ExtractDataVisitorResponse>[]) {
        return items.map(item => item.extractDataForVisitor(this))
    }

    extractForDot(item: Dot) {
        return {
            type: "Dot",
            radius: item.radius
        }
    }

    extractForCircle(item: Circle) {
        return {
            type: "Circle",
            radius: item.radius,
            width: item.radius * 2,
            height: item.radius * 2,
        }
    }

    extractForSquare(item: Square) {
        return {
            type: "Square",
            width: item.width,
            height: item.width,
        }
    }
}