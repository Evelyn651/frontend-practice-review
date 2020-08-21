let favoriteFood = "pizza";
let numOfSlices = 8;

console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
changeMe = false;
console.log(changeMe);

const entree = "Enchiladas";
console.log(entree);

// entree = "Tacos"; throws an error message because const's cannot be reassigned values

// const testing; const's cannot be declared without a value

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

//using mathematical assignments to change values

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log("The value of levelUp after mathematical assignment: ", levelUp);
console.log("The value of powerLevel after mathematical assignment: ", powerLevel);
console.log("The value of multipyMe after mathematical assignment: ", multiplyMe);
console.log("The value of quarterMe after mathematical assignment: ", quarterMe);

//working with the increment and decrement operators

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

//working with concatenation
let favoriteAnimal = "Elephant";
console.log("My favorite animal is: " + favoriteAnimal);

//practicing string interpolation
let myName = "Evelyn";
let myCity = "Miami";

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);