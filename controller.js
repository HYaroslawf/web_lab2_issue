import view from './view.js';
import calc from './model.js';

export default class controller
{
    constructor(calc, view)
    {
        this.calc_ = calc;
        this.view_ = view;
        this.term = "test";
    }

    button_process(event)
    {
        console.log(event.target.innerText);
        console.log(this.term);
    }


    test()
    {
        console.log(this.calc_.calc_logic("1"));
        console.log(this.term);
    }
}