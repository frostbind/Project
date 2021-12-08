
const numberOfSides = 6;
const imageFolder = "images";
const diceSides = ["d6-side1.png", "d6-side2.png", "d6-side3.png",
                   "d6-side4.png", "d6-side5.png", "d6-side6.png"];

let rolling = false;
let rotation = 0;
let rollDieAnimate;

let die1;
let die2;
let die3;
let die4;

let value1 = -1;
let value2 = -1;
let value3 = -1;
let value4 = -1;

let rolled1 = false;
let rolled2 = false;

let enemyTotal = 0;
let yourTotal = 0;

let sum1 = 0;
let sum2 = 0;

let round = 1;

console.log("Variables Loaded");

