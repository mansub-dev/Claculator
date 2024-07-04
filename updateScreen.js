import { states } from './state.js';

const calculatorScreen = document.querySelector('.calculator-screen');

export function updateScreen() {
    calculatorScreen.value = states.expression;

}
