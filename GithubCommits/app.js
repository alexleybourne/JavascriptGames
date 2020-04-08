
const Start = () => {
    console.log('started')
    CreateSquares()
}


const CreateSquares = () => {
    let x = 1
    let y = 1

    innerCode = `<div class="square"></div>`
    divCode = ''
    while ( y < 8 ) {
        divCode = divCode + innerCode
        y ++
    }

    while (x < 53) {
        let area = document.getElementById('squareArea')
        let div = document.createElement('div')
        div.innerHTML = divCode
        div.setAttribute('class', `week${x}`)
        area.appendChild(div)
        x ++ 
    }
}