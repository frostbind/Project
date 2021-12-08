function stopRoll() {
    rotation = 0;
    die.style.transform = `rotate(${rotation}deg)`
    cancelAnimationFrame(rollDieAnimate);
}

function rollDieAnimation() {
    die.innerHTML = `<img src="${imageFolder}/${diceSides[Math.floor(Math.random()*numberOfSides)]}" alt="">`
    rotation += 10;
    die.style.transform = `rotate(${rotation}deg)`;
    rollDieAnimate = requestAnimationFrame(rollDieAnimation)
}

function rollDie1() {
    dice[0].innerHTML = `<img src="${imageFolder}/${diceSides[Math.floor(Math.random()*numberOfSides)]}" alt="">`
    rotation += 10;
    dice[0].style.transform = `rotate(${rotation}deg)`;
    animateDice1 = requestAnimationFrame(rollDie1);
}

function rollDie2() {
    dice[1].innerHTML = `<img src="${imageFolder}/${diceSides[Math.floor(Math.random()*numberOfSides)]}" alt="">`
    rotation += 10;
    dice[1].style.transform = `rotate(${rotation}deg)`;
    animateDice2 = requestAnimationFrame(rollDie2);
}

function rollDie3() {
    dice[2].innerHTML = `<img src="${imageFolder}/${diceSides[Math.floor(Math.random()*numberOfSides)]}" alt="">`
    rotation += 10;
    dice[2].style.transform = `rotate(${rotation}deg)`;
    animateDice3 = requestAnimationFrame(rollDie3);
}

function rollDie4() {
    dice[3].innerHTML = `<img src="${imageFolder}/${diceSides[Math.floor(Math.random()*numberOfSides)]}" alt="">`
    rotation += 10;
    dice[3].style.transform = `rotate(${rotation}deg)`;
    animateDice4 = requestAnimationFrame(rollDie4);
}

function calculateScore() {
    if (value3 == 0 || value4 == 0) {
        score.innerHTML = 0;
        sum1 = 0;
    } else if (value4 == value3) {
        sum1 = value3*4;
        score.innerHTML = sum1
    } else {
        sum1 = value3+1 + value4+1;
        score.innerHTML = sum1;
    }
    
    if (value1 == 0 || value2 == 0) {
        enemyScore.innerHTML = 0;
        sum2 = 0
    } else if (value4 == value3) {
        sum2 = value1*4;
        enemyScore.innerHTML = sum2
    }else {
        sum2 = value1+1 + value2+1;
        enemyScore.innerHTML = sum2
    }

    if (rolled1 && rolled2) {
        yourTotal += sum1;
        enemyTotal += sum2;
        totalEnemyScore.innerHTML = enemyTotal;
        totalScore.innerHTML = yourTotal;
        value1 = 0
        value2 = 0
        value3 = 0
        value4 = 0
        setTimeout(function(){
            dice[0].innerHTML =    '<img src="images/d6-side1.png" alt="Dice" class="dieImage" id="die1"></img>';
            dice[1].innerHTML =    '<img src="images/d6-side1.png" alt="Dice" class="dieImage" id="die2"></img>';
            dice[2].innerHTML =    '<img src="images/d6-side1.png" alt="Dice" class="dieImage" id="die3"></img>';
            dice[3].innerHTML =    '<img src="images/d6-side1.png" alt="Dice" class="dieImage" id="die4"></img>';
            rotation = 0;
            dice[0].style.transform = `rotate(${rotation}deg)`;
            dice[1].style.transform = `rotate(${rotation}deg)`;
            dice[2].style.transform = `rotate(${rotation}deg)`;
            dice[3].style.transform = `rotate(${rotation}deg)`;
            enemyScore.innerHTML = "";
            score.innerHTML = "";
            rolled1 = false;
            rolled2 = false;

            if (round == 3) {
                if (yourTotal > enemyTotal) {
                    alert("YOU WIN")
                } else if (yourTotal < enemyTotal) {
                    alert("YOU LOSE")
                } else {
                    alert("ITS A TIE")
                }
                historyBar.newEntry(yourTotal, enemyTotal, games);
                yourTotal = 0;
                totalScore.innerHTML = "";
                enemyTotal = 0;
                totalEnemyScore.innerHTML = "";
                round = 1;
                roundDisplay.innerHTML = round
                games++;
                gamesDisplay.innerHTML = games;
                historyBar.displayEntries();
            } else {
                round++
                roundDisplay.innerHTML = round;
            }
            rotation = 0;

        },1500)
    }
}



console.log("Functions Loaded");