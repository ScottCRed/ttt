/* eslint-disable */

const afunction = (function () {

    const playerProps = (name, mark, turn) => {
        return {name, mark, turn}
    }

    const player1 = playerProps ('Scott', 'X', true);
    const player2 = playerProps ('Dean', 'O', false);

    
    let board = [];
    let count = 0;
    let player1Moves = [];
    let player2Moves = [];

function winState () {
    let winner = false;
    this.positions = Array.from(document.querySelectorAll('.box'));
    const positions = this.positions;

    let winLines = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,7],
        [3,4,5],
        [6,7,8],
    ]

    winLines.forEach((winCombo) => {
        const pos0InnerText = positions[winCombo[0]].innerText;
        const pos1InnerText = positions[winCombo[1]].innerText;
        const pos2InnerText = positions[winCombo[2]].innerText;
        const isWinCombo = pos0InnerText != '' &&
        pos0InnerText === pos1InnerText && 
        pos1InnerText === pos2InnerText

        if (isWinCombo) {
            winner = true
            console.log('did it work')
        }
    })

}

    const container = document.querySelector('#container');

        for (let i = 0; i < 9; i++) { 
         board.push('');
        }

        board.forEach((item, index) => {
            const box =  document.createElement('div');
            box.classList.add('box');
            box.setAttribute('id', count++)
            container.appendChild(box);
            box.addEventListener('click', () => { 
               
                if (player1.turn===true && box.textContent === '') {
                    
                    box.textContent = player1.mark;
                    player1Moves.push(box.id);
                    player1.turn = false;
                    player2.turn = true;                    

                    winState()
                    
                }

                else if (player2.turn===true && box.textContent === '') {

                    box.textContent = player2.mark;
                    player2Moves.push(box.id);
                    player1.turn = true;
                    player2.turn = false;

                    winState()
                }

                else {
                    return
                }
               
        });
    });

})();