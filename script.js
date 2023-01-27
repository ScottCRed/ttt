/* eslint-disable */

const playerProps = (name, mark, turn) => {
    return {name, mark, turn}
}

const player1 = playerProps ('Scott', 'X', true);
const player2 = playerProps ('Dean', 'O', false);

const game = (function () {
   
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
               
                if (player1.turn===true && box.textContent === '') {
                    
                    box.textContent = player1.mark;
                    player1.turn = false;
                    player2.turn = true;                    

                    winState()                    
                }

                else if (player2.turn===true && box.textContent === '') {

                    box.textContent = player2.mark;
                    player1.turn = true;
                    player2.turn = false;

                    winState()
                }

                else {
                    return
                }
               
        });
    });

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
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ]

    winLines.forEach((winCombo) => {
        const pos0InnerText = positions[winCombo[0]].textContent;
        const pos1InnerText = positions[winCombo[1]].textContent;
        const pos2InnerText = positions[winCombo[2]].textContent;
        const isWinCombo = pos0InnerText != '' &&
        pos0InnerText === pos1InnerText && 
        pos1InnerText === pos2InnerText

        if (isWinCombo) {
            winner = true
            
            if (player1.turn != true) {
                console.log(player1.name, 'wins')
            }

            else if (player2.turn != true) {
                console.log(player2.name, 'wins')
            };
        };
    });

}

})();

