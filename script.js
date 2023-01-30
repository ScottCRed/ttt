/* eslint-disable */

const playerProps = (name, mark, turn) => {
    return {name, mark, turn}
};


const start = (function (){

    function closeStart () {
        const close = document.querySelector('.startPage');
        close.style.zIndex = '-1'
    };

    function addPlayers () {
        event.preventDefault()

        const player1 = playerProps (form.player1Select.value, 'X', true);
        const player2 = playerProps (form.player2Select.value, 'O', false);
        const newPlayer1 = document.querySelector('.player1Card')
        newPlayer1.textContent = player1.name;

        
        const newPlayer2 = document.querySelector('.player2Card')
        newPlayer2.textContent = player2.name;

        closeStart()
    };

    const newPlayerClick = document.querySelector('.submit-button');
        newPlayerClick.addEventListener('click', addPlayers);
       
        return 
})();

const game = (function () {
   
    let board = [];
    const player1 = playerProps (form.player1Select.value, 'X', true);
    const player2 = playerProps (form.player2Select.value, 'O', false);

    const container = document.querySelector('#container');

        for (let i = 0; i < 9; i++) { 
         board.push('');
        }

        board.forEach((item, index) => {
            const box =  document.createElement('div');
            box.classList.add('box');
            container.appendChild(box);
            box.addEventListener('click', () => { 
               console.log('hey')
               console.log(player1)
               console.log(player2)
                if (player1.turn===true && box.textContent === '') {
                    
                    player1.name = form.player1Select.value;
                    player2.name = form.player2Select.value;
                    
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
            const winner1 = document.querySelector('.player1Card')
            const winner2 = document.querySelector('.player2Card')
            if (player1.turn != true) {
                winner1.textContent = player1.name + ' is the winner!'
            }

            else if (player2.turn != true) {
                winner2.textContent = player2.name + ' is the winner!'
            };
        };
    });

}

})();

