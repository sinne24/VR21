let timerID;
let counter = 0;

function incrementTime(){
    counter++;
    document.querySelector("#count").innerText = counter;
}

function start(){
    if(!timerID){
        timerID = setInterval(incrementTime, 1000);
    }
}

function stop(){
    clearInterval(timerID);
    timerID = null;
}

function reset(){
    clearInterval(timerID);
    timerID = null;
    counter = 0;
    document.querySelector("#count").innerText = counter;
}