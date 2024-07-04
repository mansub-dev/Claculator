import { operators } from './state.js';
import { addNumber, addOperator, calculateResult, clearScreen } from './operations.js';

export function handleButtonClick(value) {
    if ((value >= '0' && value <= '9') || value === '.') {
        addNumber(value);
    } else if (operators.includes(value)) {
        addOperator(value);
    } else if (value === '=') {
        calculateResult();
    } else if (value === 'C') {
        clearScreen();
    }
}