require('./itertools')
/**
 * 链表结点
 */
class ListNode{
    constructor(key){
        // 指向前一个节点
        this.prev=null;

        // 指向下一个节点
        this.next=null;

        // 数据(或者用于查找的键)
        this.key=key;
    }
}

/**
 * 双向链表
 */
class DoubleList{

    constructor(){
        this.head=null;
    }

    static createNode(key){
        return new ListNode(key)
    }

    insert(node){
        node.prev=null;
        node.next=this.head;
        if(this.head){
            this.head.prev=node;
        } 
        this.head=node;
    }

    *transverse(){
        let p=this.head;
        while(p){
            yield p
            p=p.next
        }
    }

    search(key){
        return this.transverse().find(node=>node.key===key)
    }

    delete(node){
        const {prev,next}=node;
        delete node.prev;
        delete node.next;

        if(node === this.head){
            this.head = next;
        }

        if(prev) prev.next=next;
        if(next) next.prev=prev;
    }
}
// DoubleList.ListNode=ListNode;
module.exports=DoubleList;