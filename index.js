let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonFirst= document.getElementById("button-first");
let buttonSecond = document.getElementById("button-second");
let buttonThird = document.getElementById("button-third");
let interval; // to store timer values


// this function will run when click on start

function startTimer(){
    tens++;


    if (tens < 9 ) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    } 
    if (tens>99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds; 
    }
}

buttonFirst.onclick = function () {
    interval = setInterval(startTimer);
};

buttonSecond.onclick = function() {
    clearInterval(interval);
};

buttonThird.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}