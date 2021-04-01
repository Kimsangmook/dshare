class TreeNode {
    constructor(data){
        this.data = data;
        this.child = [];
    }
}
class tree {
    constructor(){
        this.a;
        this.b;
        this.c;
        this.d;
        this.e;
        this.f;
        this.g;
        this.h;
        this.i;
    }

init_n_tree(){
    var root;
    this.a = new TreeNode('The land changed rapidly');
    this.b = new TreeNode('The land');
    this.c = new TreeNode('changed');
    this.d = new TreeNode('rapidly');
    this.e = new TreeNode('The');
    this.f = new TreeNode('land');
    // this.g = new TreeNode('G');
    // this.h = new TreeNode('H');
    // this.i = new TreeNode('I');

    root = this.a;
    root.child.push(this.b);
    root.child.push(this.c);
    root.child.push(this.d);
    // root.child[0].child.push(this.i);
    root.child[0].child.push(this.e);
    root.child[0].child.push(this.f);
    // root.child[1].child.push(this.g);
    // console.log(root.child[1].child[0]);
    // root.child[1].child[0].child.push(this.h);
}

postorder(node){
    for(var i in node.child){
        // console.log(node.child);
        // console.log(i);
        this.postorder(node.child[i])
    }
    console.log(node.data);
}


highlight(node,id){
    for(var i in node.child){
        // console.log(node.child);
        // console.log(i);
        this.highlight(node.child[i],id)
    }
    
    if(node.data===id){
        node.data="<"+id+">";
        console.log("***************");
    }
}
}


var tree1 = new tree;
tree1.init_n_tree();
tree1.highlight(tree1.a,"land");
tree1.postorder(tree1.a);
// console.log(tree1.a);
// console.log(tree1.b);
// console.log(tree1.b.child[0]);
// console.log(tree1.c);
// console.log(tree1.d);
