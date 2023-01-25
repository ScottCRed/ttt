/* eslint-disable */

const afunction = (function () {

    const playerProps = (name, mark, turn) => {
        return {name, mark, turn}
    }

    const player1 = playerProps ('Scott', 'X', true);
    const player2 = playerProps ('Dean', 'O', false);

    
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
                    console.log(player1)
                    console.log(player2)
                    box.textContent = player1.mark;

                    player1.turn = false;
                    player2.turn = true;
                    console.log(player1.turn)
                    console.log(player2.turn)
                }

                else if (player2.turn===true && box.textContent === '') {
                    console.log(player1)
                    console.log(player2)
                    box.textContent = player2.mark;

                    player1.turn = true;
                    player2.turn = false;
                    console.log(player1.turn)
                    console.log(player2.turn)
                }

                else {
                    return
                }
        });
    });
    
    function playerClick () {
        
    }

})();