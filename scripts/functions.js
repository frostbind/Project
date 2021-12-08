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
    score.innerHTML = value3+1 + value4+1;
    previousScore = score;
    enemyScore.innerHTML = value1+1 + value2+1;
    previousEnemyScore = enemyScore;

}



console.log("Functions Loaded");