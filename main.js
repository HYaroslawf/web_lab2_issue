import view from './view.js';
import calc from './model.js';
import controller from './controller.js';

let test = "testing"
console.log(test)

let display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let view_ = new view(display);
let calc_ = new calc();
let controller_ = new controller(calc_, view_);

controller_.test();

buttons.forEach(button => {
    button.addEventListener('click', controller_.button_process);
})