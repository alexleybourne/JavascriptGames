const input = () => {
    let textInput = document.getElementById('textInput')
    let button = document.getElementById('button');
    if (textInput.value.length > 0 && textInput.value !== ' ') {
        button.classList.remove('blue')
        button.classList.add('green')
    } else {
        button.classList.remove('green')
        button.classList.add('blue')
    }
}


const transformText = () => {

    let button = document.getElementById('button');
    if (button.classList.contains('green')){
        button.classList.add('rotate-center')
        let textInput = document.getElementById('textInput')
        let inputValue = textInput.value;
        // input = input.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        inputValue = inputValue.replace(/\s+/g, '-').toLowerCase();
        textInput.value = ''
        textInput.value = inputValue;
        let str = inputValue
        copyToClipboard(str)
        setTimeout( function() { button.classList.remove('rotate-center') } , 700);
        button.classList.remove('green')
        button.classList.add('blue')
    }
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