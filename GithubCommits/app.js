// Runs on page load
const Start = () => {
    console.log('started')
    CreateSquares()
    getDate()
    print()
}

// Resets by refresh
const Reset = () => {
    location.reload()
}

// Amazing sleep function
const sleep = (time) => new Promise(r => setTimeout(r, time))

let totalCommits = 0

// Adds the colouring to each square with random values
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

// Grabs current month and then updates months along top of commit log
const getDate = async () => {
    let d = new Date()
    let m = d.getMonth()
    let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

    document.getElementById('m').innerHTML = months[m]

    let i = 0
    while (i < 12) {

        let thisMonth = m + i
        if (thisMonth > 11) { thisMonth = thisMonth - 12}
        let label = document.getElementById(`m${i + 1}`)
        label.innerHTML = (months[thisMonth])

        await sleep(1)

        i ++ 
    }
}

// Generates all the squares to display
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


// Characters (grid is 7 x 52) but use (5 x 52)
let characters = [
    $ = [
        '-',
        '-',
        '-',
        '-',
        '-',
    ],
    A = [
        '███',
        '█-█',
        '███',
        '█-█',
        '█-█',
    ],
    B = [
        '███-',
        '█--█',
        '███-',
        '█--█',
        '███-',
    ],
    C = [
        '███',
        '█--',
        '█--',
        '█--',
        '███',
    ],
    D = [
        '███-',
        '█--█',
        '█--█',
        '█--█',
        '███-',
    ],
    E = [
        '███',
        '█--',
        '███',
        '█--',
        '███',
    ],
    F = [
        '███',
        '█--',
        '███',
        '█--',
        '█--',
    ],
    G = [
        '████',
        '█---',
        '█-██',
        '█--█',
        '████',
    ],
    H = [
        '█-█',
        '█-█',
        '███',
        '█-█',
        '█-█',
    ],
    I = [
        '█',
        '█',
        '█',
        '█',
        '█',
    ],
    L = [
        '█--',
        '█--',
        '█--',
        '█--',
        '███',
    ],
    M = [
        '█---█',
        '██-██',
        '█-█-█',
        '█---█',
        '█---█',
    ],
    N = [
        '█---█',
        '██--█',
        '█-█-█',
        '█--██',
        '█---█',
    ],
    O = [
        '███',
        '█-█',
        '█-█',
        '█-█',
        '███',
    ],
    P = [
        '███',
        '█-█',
        '███',
        '█--',
        '█--',
    ],
    Q = [
        '███-',
        '█-█-',
        '█-█-',
        '█-█-',
        '████',
    ],
    R = [
        '███',
        '█-█',
        '██-',
        '█-█',
        '█-█',
    ], 
    S = [
        '███',
        '█--',
        '███',
        '--█',
        '███',
    ],
    T = [
        '███',
        '-█-',
        '-█-',
        '-█-',
        '-█-',
    ],
    U = [
        '█-█',
        '█-█',
        '█-█',
        '█-█',
        '███',
    ],
    V = [
        '█-█',
        '█-█',
        '█-█',
        '█-█',
        '-█-',
    ],
    W = [
        '█-█-█',
        '█-█-█',
        '█-█-█',
        '█-█-█',
        '-█-█-',
    ],
    X = [
        '█-█',
        '█-█',
        '-█-',
        '█-█',
        '█-█',
    ],
    Y = [
        '█-█',
        '█-█',
        '███',
        '-█-',
        '-█-',
    ],
    Z = [
        '███',
        '--█',
        '-█-',
        '█--',
        '███',
    ],
]

// The printed message
let message =  { characters : H, I, R, E }

// Displays Message
const print = async () => {
    console.log(message)
}