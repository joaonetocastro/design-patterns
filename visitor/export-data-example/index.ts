import { ExtractDataVisitor } from "./extract-data-visitor";
import { Circle } from "./protocols/circle";
import { Dot } from "./protocols/dot";
import { Square } from "./protocols/square";

const random = () => Math.random() * 100

const visitor = new ExtractDataVisitor()

const items = [
    new Circle(random()),
    new Dot(random()),
    new Square(random()),
    new Square(random()),
    new Circle(random()),
    new Dot(random()),
]

const result = visitor.visitItems(items)

console.log(result)