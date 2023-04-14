export default class view
{
    constructor(display)
    {
        this.display_value = display;
    }

    update_display(new_value)
    {
        this.display_value.innerText = new_value;
    }
}

export let test = 123