class BinaryTree{
    constructor(value,left=null,right=null){
        this.value=value;
        this.left=left;
        this.right=right;
    }
}

function max_longest_level(node,val){
    return (node && node.value===val)?
        Math.max(max_longest_level(node.left,val),max_longest_level(node.right,val))+1:0
}

function *transverse(node){
    yield node;
    if(node.left){
        yield *transverse(node.left)
    }
    if(node.right){
        yield *transverse(node.right)
    }
}

function solve(node){
    return [...transverse(node)].reduce((max,o)=>{
        return Math.max(max_longest_level(o.left,o.value)+max_longest_level(o.right,o.value),max)
    },0)
}