
const Start = () => {
    console.log('started')
    CreateSquares()
}

const RandomColour = () => {
    x = (Math.round(Math.random() * 52))
    y = (Math.round(Math.random() * 7))
    let day = document.querySelector(`#week${x} #day${y}`)
    day.removeAttribute('class', `blank`)
    day.setAttribute('class', `green square`)
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