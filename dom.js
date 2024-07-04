import { handleButtonClick } from './handleButtonClick.js';

const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '0', '.', 'C', '/',
    '='
];

export function createButtons() {
    const buttonContainer = document.querySelector('.calculator-buttons');
    buttons.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;
        button.classList.add('btn');
        if (value === '=') {
            button.classList.add('btn-result');
        }
        button.addEventListener('click', () => handleButtonClick(value));
        buttonContainer.appendChild(button);
    });
}