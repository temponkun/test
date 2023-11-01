var a = 12;
var b = 12;

console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("Set the choice");

//change choice val as per need
var choice = 1;

switch(choice){
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    case 4:
        console.log(a/b);
        break;
}