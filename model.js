export default class calc
{
    constructor()
    {
        this.buttons = []
        this.display = ""
    }

    calc_logic(btn_value)
    {
        if (btn_value == "1" || btn_value == "2" || btn_value == "3" || btn_value == "4" || btn_value == "5" || btn_value == "6" || btn_value == "7" || btn_value == "8" || btn_value == "9" || btn_value == "0")
        {
            this.display += btn_value;
        }
        if (btn_value == "+" || btn_value == "-" || btn_value == "*" || btn_value == "/")
        {
            this.display += btn_value;
        }
        if (btn_value == "=")
        {
            this.display = eval(this.display);
        }
        return this.display;
    }

}