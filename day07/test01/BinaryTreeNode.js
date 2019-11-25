class BinaryTreeNode{
    constructor(key,value){
        // 指向父节点
        this.p=null;
        // 左
        this.left=null;
        // 右
        this.right=null;
        // 键值
        this.key=key;
        // 卫星数据
        this.value=null;
    }
}
module.exports=BinaryTreeNode;