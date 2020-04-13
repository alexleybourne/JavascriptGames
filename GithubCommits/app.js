
const Start = () => {
    console.log('started')
    CreateSquares()
    getDate()
}

const Reset = () => {
    location.reload()
}

const sleep = (time) => new Promise(r => setTimeout(r, time))

let totalCommits = 0

const RandomColour = async () => {
    let i = 0
    while ( i < 366 ) {

        let x = (Math.round(Math.random() * 51) + 1)
        let y = (Math.round(Math.random() * 6) + 1)
        let day = document.querySelector(`#week${x} #day${y}`)
        if (day.classList.contains("blank")) {
            day.classList.replace("blank", "green")
        } else if (day.classList.contains("green")) {
            day.classList.replace("green", "dark-green")
        } else if (day.classList.contains("dark-green")) {
            day.classList.replace("dark-green", "darker-green")
        } else if (day.classList.contains("darker-green")) {
            day.classList.replace("darker-green", "darkest-green")
        }

        document.getElementById("commit-number").textContent = totalCommits
        document.title = `${totalCommits} Github Commits`

        await sleep(1)

        totalCommits ++
        i ++ 
    }
}

const getDate = async () => {
    let d = new Date()
    let m = d.getMonth()
    let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

    let i = 0
    while (i < 12) {

        let thisMonth = m + i
        if (thisMonth > 11) { thisMonth = thisMonth - 12}
        console.log(months[thisMonth])
        await sleep(1)

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