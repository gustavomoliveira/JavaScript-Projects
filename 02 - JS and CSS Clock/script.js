let hourHand = document.querySelector('.hour-hand');
let minHand = document.querySelector('.min-hand');
let secondHand = document.querySelector('.second-hand');

function setDate() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    
    let secondDegrees = ((seconds / 60) * 360) + 90; //+90 por causa da posição inicial do ponteiro de 90˚;
    let minuteDegrees = ((minutes / 60) * 360) + 90;
    let hourDegrees = ((hours / 12) * 360) + 90;
    
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); //callback com setDate, parâmetro em milesegundos, no caso, 1 seg;
//setInterval irá repetir a callback em loop no determinado intervalo;



