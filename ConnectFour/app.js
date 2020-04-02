
const transformText = () => {
    console.log('Running')
    let input = document.getElementById('textInput').value;
    document.getElementById('textInput').value = '';
    console.log(input);
    // input = input.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    input = input.replace(/\s+/g, '-').toLowerCase();
    document.getElementById('textOutput').innerText = input;
    let str = input
    copyToClipboard(str)
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