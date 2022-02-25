//Variables
let x=0;

//Initialize game elements
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#grid');
    let boxes = Array.from(document.querySelectorAll('.box'));
    const Score = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
})

//Start game
function init() {
    while (x<2000){
        var box = document.createElement('div');
        box.className = "box";
        document.getElementById('grid').appendChild(box);
        x++;
    }
}