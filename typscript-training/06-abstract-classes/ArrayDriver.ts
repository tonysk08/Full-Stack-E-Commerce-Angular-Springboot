import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5,10,20)
let myRectangle = new Rectangle(0,0,3,7);

//declare  an array of shapes ..empty

let theShapes:Shape[] = [];

//add the shaes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log("Area de la forma = "+tempShape.caculateArea());
    console.log();
}