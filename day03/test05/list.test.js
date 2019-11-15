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
})