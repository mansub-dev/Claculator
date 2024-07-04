import { states, operators } from './state.js';
import { updateScreen } from './updateScreen.js';

export function addNumber(number) {
    states.currentInput += number;
    states.expression += number;
    updateScreen();
}

export function addOperator(op) {
    if (operators.includes(states.expression.slice(-1))) {
        states.expression = states.expression.slice(0, -1);
    }
    states.expression += op;
    states.currentInput = '';
    updateScreen();
}
export function calculateResult() {
    try {
        let result = eval(states.expression);

        if (!isNaN(result)) {
            if (Number.isInteger(result)) {
                states.currentInput = result.toString();
                states.expression = result.toString();
            } else {
                states.currentInput = result.toFixed(2);
                states.expression = result.toFixed(2);
            }
            updateScreen();
        } else {
            clearScreen();
            calculatorScreen.value = "Error";
        }
    } catch (e) {
        clearScreen();
        calculatorScreen.value = "Error";
    }
}

export function clearScreen() {
    states.currentInput = '';
    states.expression = '';
    updateScreen();
}
