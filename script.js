/* eslint-disable */

const afunction = (function () {

    let board = [];

const container = document.querySelector('#container');

    for (let i = 0; i < 9; i++) { 
        board.push('');
    }

    board.forEach((item, index) => {
        const box =  document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        box.addEventListener('click', () => { 
            box.textContent = index;
        });
    });
    
    function playerClick () {
        
    }

})();