const display = document.getElementById('display');
const btn = document.getElementById('btn');

const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
];

btn.addEventListener('click', () => {
    let hexColor = '#';
    debugger;
    for(let i=0; i < 6; i++){
        const index = Math.floor(Math.random() * 16);

        hexColor += hex[index];
    }

    display.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
});