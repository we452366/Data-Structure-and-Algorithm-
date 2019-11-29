const BinaryTreeNode=require('./BinaryTreeNode')
class BinaryTree{
    constructor(){
        this.root=null
    }

    insert(key,value){
        const node=new BinaryTreeNode(key,value);

        let p=this.root;

        // 尾指针
        let tail=this.root;
        while(tail){

            p=tail;

            if(tail && key<tail.key){
                tail=tail.left;
            }else{
                tail=tail.right;
            }
        }

        if(!p){
            this.root=node;
            return
        }

        // 插入
        if(p.key<key){
            p.right=node
        }else{
            p.left=node
        }
        node.p=p;
    };

    transverse(){
        return this._transverse(this.root)
    };

    *_transverse(node){
        if(!node){return};
        yield * this._transverse(node.left);
        yield node;
        yield * this._transverse(node.right);
    }
}
module.exports=BinaryTree