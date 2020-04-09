
const Start = () => {
    console.log('started')
    CreateSquares()
}

const RandomColour = () => {
    let i = 1
    while ( i < 100 ) {
        x = (Math.round(Math.random() * 52))
        y = (Math.round(Math.random() * 7))
        let day = document.querySelector(`#week${x} #day${y}`)
        if (day.classList.contains('blank')) {
            day.removeAttribute('class', `blank`)
            day.setAttribute('class', `green square`)
        } else if (day.classList.contains('green')) {
            day.setAttribute('class', `dark-green square`)
        }
        
        
        console.log(i)
        i ++
    }
}

const CreateSquares = () => {
    let x = 1
    let y = 1

    divCode = ''
    while ( y < 8 ) {
        innerCode = `<div id="day${y}" class="square blank"></div>`
        divCode = divCode + innerCode
        y ++
    }

    while (x < 53) {
        let area = document.getElementById('squareArea')
        let div = document.createElement('div')
        div.innerHTML = divCode
        div.setAttribute('id', `week${x}`)
        area.appendChild(div)
        x ++ 
    }
}