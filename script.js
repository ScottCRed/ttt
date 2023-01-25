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

    let winLines = [
        ['0','1','2'],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ]

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
                    console.log(player1Moves.sort());
                    player1.turn = false;
                    player2.turn = true;

                    console.log(winLines)
                    

                    const test = winLines.every(value => {
                        return player1Moves.includes(value);
                    })
                    console.log(test)
                    
                }

                else if (player2.turn===true && box.textContent === '') {

                    box.textContent = player2.mark;
                    player2Moves.push(box.id);
                    console.log(player2Moves.sort());
                    player1.turn = true;
                    player2.turn = false;
                }

                else {
                    return
                }


/*                if (player1Moves.length > 4) {

                    console.log('now');
            
                    for (let i = 0; i< winLines.length; i++) {
                        const possible = winLines[i];
                        let player1Check = possible.every((item) => player1Moves.sort().includes(item));
                        let player2Check = possible.every((item) => player2Moves.sort().includes(item));
            
                        console.log(player1Check);
                        console.log(player2Check);
                    }
                }
            
                else {
                    return
                }
*/                
        });
    });

})();