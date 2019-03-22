name = "Katherine"
var name; // reference error if using let: name is not defined because hoisting doesn't work on let variables
console.log(name);
setName();
function setName() {
    var name = "Katherine";// value logged is my name even though we called the function before it was created- functions are hoisted to the top
    console.log(name);
}
//create a function that will accept 2 parameters, the value of the parameters will be used to determine the average and result will be returned
// add console logs to monitor each stage of the code 
//see what order the logs will beprinted in the console
console.log("some text");
let avg = getAvg(2, 2); //assigns variable for function with numbers(this usually would be at the bottom)
console.log("some text", avg);
function getAvg(a, b) { //
    console.log("some text");
    var result = (a + b)
    return result;
}
// create an array called fruits and create a global variable named faveFruit using let
// let favFruit; 
let fruits = ["apples", "oranges", "bananas"]
//create a function declaration that will print the first fruit in the fruits array
//inside this function create a new variable and set it equal to your favorite fruit
//call the function
function displayFruits(){
    console.log (fruits[0]);
    let favFruit= fruits[2];

    return function displayFavFruits(){
        console.log(favFruit);
    }
}
displayFruits()(); // adding a second pair of parenthesis will return the function a second time
// console.log(leastFavFruit);

//declare another function that will print your favorite fruit
//then nest the favFruit function inside the fruits - favFruit is now logged because displayFavFruit has access to variables within the parent function

//Assign a new variable called least favFruit and assign it to your least favorite
//log it to console after displayfavFruit is declared-- it will be undefined
let leastFavFruit = fruits[1];

//create new function and have it console.log "hello katherine"
//call this function before the function body-- it worked because the function was hoisted
newFunc();
function newFunc(){
    console.log("Hello Katherine")
}
//create new function using function expression(using let). Have alert appear
//call function before it is declared as expression--doesn't work because we used let and that variable is not hoisted
// word();
let word = function(){
    alert ("Nice!");
}
word();