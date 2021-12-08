
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
let games = 1;

const historyBar = {
    wins:0,
    loses:0,
    winrate:0,
    gamesPlayed:[],
    newEntry:function(yourScore, enemyScore, game) {
        this.gamesPlayed.push("<p>")
        if (yourScore > enemyScore) {
            this.wins++
            this.gamesPlayed.push(`Game: ${game}. You won by ${yourScore-enemyScore} points. Your winrate against your opponent is`);
        } else if (yourScore < enemyScore) {
            this.loses++
            this.gamesPlayed.push(`Game: ${game}. You lost by ${enemyScore-yourScore} points. Your winrate against your opponent is`);
        }
        if (this.wins == 0 && this.loses == 0) {
            this.winrate = 1;
        } else {
            this.winrate = this.wins/(this.wins+this.loses);
        }
        this.gamesPlayed.push(` ${this.winrate * 100}%`)
        this.gamesPlayed.push("</p>")
    },
    displayEntries: function() {
        gameHistory.innerHTML = this.gamesPlayed;
    }
}

console.log("Variables Loaded");

