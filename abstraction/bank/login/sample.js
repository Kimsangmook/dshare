import { Structure_obj } from "../common/abstract";

export class Login extends Structure_obj{
    
    constructor(...args){
        super();
        this.create(args);
    }

    default(){
        let structure = this.child();
        console.log(structure['access_id']);
        console.log(structure['password']);
        console.log(structure['submit_button']);
    }


}

export class ContentsInfo extends Structure_obj{

    constructor(...args){
        super();
        this.create(args)
    }
}

export class Title extends Structure_obj{

    constructor(...args){
        super();
        this.create(args)
    }
}

export class Table extends Structure_obj{

    constructor(...args){
        super();
        this.create(args)
    }
}

export class Contents extends Structure_obj{

    constructor(...args){
        super();
        console.log(args);
        this.create(args)
    }
}

// let login_div = new Login("title","access_id","password","submit_button");
// let css = {
//     border : "solid",
//     height : "150px"
// }
// login_div.init_css(css);
// document.body.appendChild(login_div.dom);
// login_div.default();
// let logchild =login_div.child();

// logchild["title"].dom.innerHTML = "문제은행 로그인";
// logchild["title"].dom.init_css(css);

// logchild["access_id"].dom.appendChild(document.createElement("input"));
// logchild["password"].dom.appendChild(document.createElement("input"));
// logchild["submit_button"].dom.appendChild(document.createElement("button"));

let object = {
    create_new : ["button","EVENT"],
    search : ["button","EVENT"],
    select : ["select","NO_EVENT"],
    search : ["input","NO_EVENT"],
    submit : ["button","doClick"],
    select_num : ["select","NO_EVENT"],
    order : ["button","EVENT"]

}


let con_info = new ContentsInfo("create_new","search_all","select_info","search_text","submit","select_num","order");
let title = new Title("title");
let table = new Table("table");
let main = new Contents(con_info,title,table);
console.log(main.dom);
// document.body.appendChild(con_info4.dom);
// let con_info_child = con_info.child();
// con_info_child["create_new"].dom.appendChild(document.createElement("button"));

