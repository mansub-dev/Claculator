import { states } from './state.js';
import { updateScreen } from './updateScreen.js';

export function backspace() {
    states.expression = states.expression.slice(0, -1);
    updateScreen();

}