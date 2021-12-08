console.log("Driver Loaded");
let score = document.getElementById("score");
let enemyScore = document.getElementById("enemyScore");
let totalScore = document.getElementById("totalScore");
let totalEnemyScore = document.getElementById("enemyTotal");
let roundDisplay = document.getElementById("round");

let nodeDice = document.querySelectorAll(".diceBox");
let dice = Array.from(nodeDice);

dice[2].addEventListener("click", function() {
    if (!rolled1) {
        rolled1 = true;
        setTimeout(function() {
            cancelAnimationFrame(animateDice3)
            value3 = Math.floor(Math.random()*numberOfSides)
            dice[2].innerHTML = `<img src="${imageFolder}/${diceSides[value3]}" alt="">`
            setTimeout(function() {
                cancelAnimationFrame(animateDice1)
                value1 = Math.floor(Math.random()*numberOfSides)
                dice[0].innerHTML = `<img src="${imageFolder}/${diceSides[value1]}" alt="">`
                calculateScore();
            },500)
            animateDice1 = requestAnimationFrame(rollDie1)
        }, 500);
        animateDice3 = requestAnimationFrame(rollDie3)
    }
   
})
dice[3].addEventListener("click", function() {
    if (!rolled2) {
        rolled2 = true;
        setTimeout(function() {
            cancelAnimationFrame(animateDice4)
            value4 = Math.floor(Math.random()*numberOfSides)
            dice[3].innerHTML = `<img src="${imageFolder}/${diceSides[value4]}" alt="">`
            setTimeout(function() {
                cancelAnimationFrame(animateDice2)
                value2 = Math.floor(Math.random()*numberOfSides)
                dice[1].innerHTML = `<img src="${imageFolder}/${diceSides[value2]}" alt="">`
                calculateScore()
            },500)
            animateDice2 = requestAnimationFrame(rollDie2)
        }, 500);
        animateDice4 = requestAnimationFrame(rollDie4)
    }
    
})

//dice.forEach(function(element) { 
//    element.addEventListener("click",function() {
//        die = this;
//        console.log(die);
//        setTimeout(function() {
//            console.log("timeout")
//            rolling = false;
//            stopRoll();
//        }, 1000)
//        rollDieAnimate = requestAnimationFrame(rollDieAnimation);
//    })
//})

//function rollDie(rolledDie) {
//    console.log("TEST")
//    die = rolledDie;
//    queue.push(die);
//    animationQueue();
//}

//function animationQueue() {
//    console.log(queue.length)
//    while (queue.length > 0) {
//        setTimeout(function() {
//            rotation = 0;
//            die.style.transform = `rotate(${rotation}deg)`
//            cancelAnimationFrame(rollDieAnimate);
//        }, 1000)
//        queue.shift();
//        console.log(queue.length)
//        rollDieAnimate = requestAnimationFrame(rollDieAnimation);
//        
//    }
//}




