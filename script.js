/* eslint-disable */

const playerProps = (name, mark, turn) => {
    return {name, mark, turn}
};


const start = (function (){

    function startGame () {
        
        addPlayers()
        const player1 = playerProps (form.player1Select.value, 'X', true);
        const player2 = playerProps (form.player2Select.value, 'O', false);
        closeStart()
        console.log(player1)
        console.log(player2)
    };

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
    };

    const newPlayerClick = document.querySelector('.submit-button');
        newPlayerClick.addEventListener('click', startGame);
       
        return 
})();

const game = (function () {
   
    let board = [];
    //const player1 = playerProps (form.player1Select.value, 'X', true);
    //const player2 = playerProps (form.player2Select.value, 'O', false);
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
                if (newPlayer1.turn===true && box.textContent === '') {
                    
                    box.textContent = newPlayer1.mark;
                    newPlayer1.turn = false;
                    newPlayer2.turn = true;                    
                    winState()                    
                }

                else if (newPlayer2.turn===true && box.textContent === '') {

                    box.textContent = newPlayer2.mark;
                    newPlayer1.turn = true;
                    newPlayer2.turn = false;

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
            if (newPlayer1.turn != true) {
                winner1.textContent = newPlayer1.name + ' is the winner!'
            }

            else if (newPlayer2.turn != true) {
                winner2.textContent = newPlayer2.name + ' is the winner!'
            };
        };
    });

}

})();

