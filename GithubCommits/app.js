
const Start = () => {
    console.log('started')
    CreateSquares()
}


const CreateSquares = () => {
    let i = 1
    while (i < 53) {
        let area = document.getElementById('squareArea')
        let div = document.createElement('div')
        div.innerHTML = `<div class="square"></div>`
        div.setAttribute('class', `week${i}`)
        area.appendChild(div)
        i ++ 
    }
}