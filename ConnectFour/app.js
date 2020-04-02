
const transformText = () => {
    console.log('Running')
    document.getElementById('button').classList.add('rotate-center');
    let textInput = document.getElementById('textInput')
    let inputValue = textInput.value;
    // input = input.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    inputValue = inputValue.replace(/\s+/g, '-').toLowerCase();
    textInput.value = ''
    textInput.value = inputValue;
    let str = inputValue
    copyToClipboard(str)
    setTimeout( function() { document.getElementById('button').classList.remove('rotate-center') } , 700);
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