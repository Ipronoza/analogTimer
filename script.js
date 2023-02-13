let resetBtn = document.querySelector('.reset');
let stopBtn = document.querySelector('.stop');
let startBtn = document.querySelector('.start');

let min = 1;
let sec = 1;
let milsec = 0;
let flag;
let interval1;
let interval2;
let interval3;

startBtn.addEventListener('click', () => {
    flag = true;
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
    interval1 = setInterval(fMin, 60000);
    interval2 = setInterval(fMilSec, 16.6666667);
    interval3 = setInterval(fSec, 1000);
})

stopBtn.addEventListener('click', stopTimer);
function stopTimer() {
    if (flag) {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
    }
    flag = false;
}

resetBtn.addEventListener('click', resetTimer);
function resetTimer() {
    clearFields();
}


function fMin() {
    document.querySelector('#min').style.transform = 'rotate(' + min + 'deg)';
    if (min + 6 == 366) {
        min = 0;
    }
    else { min += 6; }
}

function fSec() {
    document.querySelector('#sec').style.transform = 'rotate(' + sec + 'deg)';
    if (sec + 6 == 366) {
        sec = 0;
    }
    else { sec += 6; }
}

function fMilSec() {
    document.querySelector('#milsec').style.transform = 'rotate(' + milsec + 'deg)';
    if (milsec + 6 == 366) {
        milsec = 0;
    }
    else { milsec += 6; }
}

function clearFields() {
    if (!flag) {
location.reload();
    }
}