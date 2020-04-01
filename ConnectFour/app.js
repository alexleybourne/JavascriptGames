document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    console.log('YEEET')

    for (var i = 0, len = squares.length; i < len; i++)

        (function(index){
            //add an onclick to each square in your grid
            squares[i].onclick = function(){
                if(squares[index + 7].classList.contains('taken')) {
                    if (currentPLayer === 1) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-one')
                        currentPLayer = 2
                        displayCurrentPlayer.innerHTML = currentPLayer
                    } else if (currentPLayer === 2) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-two')
                        currentPLayer = 1
                        displayCurrentPlayer.innerHTML = currentPLayer
                    }
                } else alert('cant go here')
            }
        })


})

