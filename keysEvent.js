import { operators } from './state.js';
import { addNumber, addOperator, calculateResult, clearScreen } from './operations.js';
import { backspace } from './backspace.js';

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.') {
        addNumber(key);
    } else if (operators.includes(key)) {
        addOperator(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    } else if (key === 'C' || key === 'c') {
        clearScreen();
    } else if (key === ' ') {
        event.preventDefault();
    }
});