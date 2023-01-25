/* eslint-disable */

let board = ['X', 'O', 'O', 'X', 'O', 'X', 'O' , 'X', 'O'];
let count = 0

const container = document.querySelector('#container');

for (let i = 0; i < board.length; i++) { 
    console.log(board[i])
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = board[i];

    container.appendChild(box);
}