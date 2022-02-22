document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#grid');
    let boxes = Array.from(document.querySelectorAll('.box'));
    const Score = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
})

function init() {
    for(x=0; x<200; x++) {
        var box = document.createElement('div');
        box.className = "box";
        document.getElementById('grid').appendChild(box);
    }
}