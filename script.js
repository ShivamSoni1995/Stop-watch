let seconds = 00;
let tens = 00;
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let btnStart = document.querySelector(".start-btn");
let btnStop = document.querySelector(".stop-btn");
let btnReset = document.querySelector(".reset-btn");
let interval

btnStart.addEventListener('click', ()=>{
  interval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', ()=>{
    clearInterval(interval);
})
btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    seconds='00';
    tens='00'; 
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens; 
})

function startTimer(){
tens++;
if(tens <= 9){
    getTens.innerHTML = '0' + tens;
}
if(tens > 9){
    getTens.innerHTML = tens;
}
if(tens > 99){
    seconds++;
    getSeconds.innerHTML = '0' + seconds;
    tens=0;
    getTens.innerHTML = '0' + 0;
if(seconds > 9){
    getSeconds.innerHTML = seconds;
}

}
}