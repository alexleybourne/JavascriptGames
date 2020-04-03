let removeSpacing = true
let makeLowercase = true
let removeNumbers = false
let removeSCharacters = false


const removeSpaces = () => {
    removeSpacing = (removeSpacing? false : true) 
    console.log(removeSpacing)
}

const lowercase = () => {
    makeLowercase = (makeLowercase? false : true) 
    console.log(makeLowercase)
}

const removeNums = () => {
    removeNumbers = (removeNumbers? false : true)
    console.log(removeNumbers)
}

const removeSChars = () => {
    removeSCharacters = (removeSCharacters? false : true) 
    console.log(removeSCharacters)
}


document.addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('button').click();
  }
});

const input = () => {
    let textInput = document.getElementById('textInput')
    let button = document.getElementById('button');
    if (textInput.value.length > 0 && textInput.value !== ' ') {
        button.classList.remove('black')
        button.classList.add('green')
    } else {
        button.classList.remove('green')
        button.classList.add('black')
        resetButton()
    }
};


const transformText = () => {
    let button = document.getElementById('button');
    let deleteButton = document.getElementById('deleteButton');
    if (button.classList.contains('green')){
        button.classList.add('rotate-center')
        let textInput = document.getElementById('textInput')
        let inputValue = textInput.value;
        // input = input.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        inputValue = inputValue.replace(/\s+/g, '-').toLowerCase();
        textInput.value = inputValue;
        let str = inputValue;
        copyToClipboard(str);
        removeClasses();
    }
}

const clearText = () => {
    document.getElementById('textInput').value = '';
    resetButton();
}

const removeClasses = () => {
    setTimeout( function() { 
        button.classList.remove('green', 'visible', 'rotate-center')
        button.classList.add('black', 'hidden')
        deleteButton.classList.remove('hidden')
        deleteButton.classList.add('visible')
    }  , 700);
}

const resetButton = () => {
    button.classList.add('rotate-center')
    button.classList.remove('hidden')
        button.classList.add('visible')
        deleteButton.classList.remove('visible')
        deleteButton.classList.add('hidden')
    setTimeout( function() { 
        button.classList.remove('rotate-center')
    }  , 700);
}

const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

let settingsOpen = false

const settings = () => {

    const box = document.getElementById('settingsBox');
    const icon = document.getElementById('settingsIcon');

    if (settingsOpen) {
        settingsOpen = false
        icon.classList.add('rotateBackwards')
        box.classList.remove('checkboxOpen')
        box.classList.add('checkboxClosed')
        setTimeout( function() { 
            box.classList.remove('checkboxFull')
            box.classList.add('checkboxSmall')
        }  , 300);
        setTimeout( function() { 
            icon.classList.remove('rotateBackwards')
        }  , 800);
    } else {
        settingsOpen = true
        icon.classList.add('rotateForwards')
        box.classList.remove('checkboxSmall')
        box.classList.add('checkboxFull')
        setTimeout( function() { 
            box.classList.remove('checkboxClosed')
            box.classList.add('checkboxOpen')
        }  , 300);
        setTimeout( function() { 
            icon.classList.remove('rotateForwards')
        }  , 800);
    }
}