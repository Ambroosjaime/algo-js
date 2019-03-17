class circle{
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset,yOffset){
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
    get surface (){
        return Math.PI * Math.pow(this.radius, 2);
    }
    set surface(varRadius){
        this.radius = varRadius;
    }
    
}

let circle1 = new circle (20, 50, 10);


console.log(circle1.surface);
/* circle1.move(10,15);
console.log(circle1); */
circle1.surface = 5;
console.log(circle1.surface);
circle1.move(30,50);
console.log(circle1);



/*Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.*/

/*class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));*/



/*https://www.w3resource.com/javascript-exercises/javascript-object-exercise-9.php*/

/*JavaScript Object: Exercise-9 with Solution
Write a JavaScript program to calculate the area and perimeter of a circle. Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
JavaScript: Area and circumference of a circle
In geometry, the area enclosed by a circle of radius r is πr2. Here the Greek letter π represents a constant, approximately equal to 3.14159, which is equal to the ratio of the circumference of any circle to its diameter.

The circumference of a circle is the linear distance around its edge.


/*function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));*/