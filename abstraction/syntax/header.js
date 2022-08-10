class Dom{
    constructor(){
        this._dom = document.createElement("div");
    }
    
    get dom(){
        return this._dom;
    }
    
    set dom(new_dom) {
        if (new_dom instanceof Element) {
            this._dom = new_dom;
        } else {
            throw new Error("parameter is not an Element");
        }
    }
    
    delete = () => {
        this.dom.remove();
    }
}

class Image extends Dom{
    constructor(){
        super();
    }

    setId=(id)=>{
        this.dom.id=id;

    }
    append_to = (parent) => {
        parent.appendChild(this.dom);
    }

    init_css = () =>{
        console.log("적용");
    }

}

class Text extends Dom{
    constructor(){
        super();
    }


    setId=(id)=>{
        this.dom.id=id;
        // console.log(this.dom)

    }
    append_to = (parent) => {
        parent.appendChild(this.dom);
    }
}



class Button extends Dom{
    constructor(){
        super();
    }


    setId=(id)=>{
        this.dom.id=id;
    }

    append_to = (parent) => {
        // console.log(parent);
        parent.appendChild(this.dom);
    }
}
class Componets extends Dom{
    constructor(){
        
    }

}





class Struct_Object extends Dom{
    
    constructor(...args){
        super();
        this.contents = [...args];
        // console.log(this.contents);
        this.tamplate = {
            "image": function(){
                return new Image;
            },
            "text": function(){
                return new Text;
            },
            "button": function(){
                return new Button;
            },
            "select": function(){
                return new Select;
            },
        };
        this.components = [];
    
    }

    get Struct_Object(){
    
        return 0;
    }

    set Struct_Object(args){
        if (typeof(args) === "string"){
            this.contents.push(args);
        }else{
            throw new Error("parameter is not a string");
        }
        // console.log(args);
    
    }



    create = () =>{
        for (let value in this.contents){
            eval("let elemnet_"+this.contents[value]+"_"+value+" = this.tamplate[this.contents[value]]()\n"
            +"elemnet_"+this.contents[value]+"_"+value+".setId('"+this.contents[value]+"_"+value+"')\n"
            +"elemnet_"+this.contents[value]+"_"+value+".append_to(document.body)\n"
            +"this.components.push("+"elemnet_"+this.contents[value]+"_"+value+")");
        }

    }

    delete = () =>{
        
        
    }

    
}





console.log("연습");
let app = new Struct_Object("image","text","text","text","text","button");
app.create();

app.components[0].init_css();
