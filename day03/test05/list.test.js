const DoubleList=require('./list')
const {assert} = require('chai');

describe('链表测试',()=>{
    it('测试搜索',()=>{
        const list=new DoubleList();

        for(let i=1;i<=10;i++){
            const node = DoubleList.createNode(i);
            list.insert(node)
        }

        assert.equal(list.search(5).key,5)
    })

    it('插入元素和遍历',()=>{
        const list=new DoubleList();

        for(let i=1;i<=5;i++){
            const node=DoubleList.createNode(i);
            list.insert(node)
        }

        const it=list.transverse()

        assert.deepEqual([5,4,3,2,1],[...it].map(node=>node=node.key))
    })

    it('删除元素',()=>{
        const list=new DoubleList();

        for(let i=1;i<=5;i++){
            const node=DoubleList.createNode(i);
            list.insert(node)
        }

        const node=list.search(3)
        list.delete(node)

        const it=list.transverse()
        assert.deepEqual([5,4,2,1],[...it].map(node=>node=node.key))
    })
})