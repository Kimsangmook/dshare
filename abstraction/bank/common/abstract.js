export class Dom {
    constructor() {
        this._dom = document.createElement("div");
    }

    get dom() {
        return this._dom;
    }

    set dom(new_dom) {
        if (new_dom instanceof Element) {
            this._dom = new_dom;
        } else {
            throw new Error("parameter is not an Element");
        }
    }

    init_css(style) {
        Object.assign(this.dom.style, style);
    }

    render() {

    }

    delete = () => {
        this.dom.remove();
    }
}

export class Structure_obj extends Dom{

    constructor(){
        super();
        this.structure_obj = new Object;
    }

    child() {
        return this.structure_obj;
    }

    create(args) {
        let args_array = args;
        console.log(args_array);
        for (const value of args_array){
            console.log(value);
            // this.value= new Dom;
            // this.value.dom.id = value;
            // this.structure_obj[value] = this.value;
            // this.dom.appendChild(this.value.dom);
        }
    }

}