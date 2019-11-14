const {assert} = require('chai');
const Queue=require('./queue')

describe('测试链接',()=>{
    it('FIFO',()=>{
        const q =new Queue(1000)
        for(let i=1;i<=5;i++){
            q.enqueue(i)
        }

        for(let i=1;i<=5;i++){
            assert.equal(q.dequeue(),i)
        }
    })

    it('overflow',()=>{
        const q =new Queue(1000)
        try{
            for(let i=0;i<1001;i++){
                q.enqueue(i)
            }
        }catch(ex){
            error=ex;
        }
        assert.equal(error,'overflow')
    })

    it('overflow-2',()=>{
        const q =new Queue(1000)
        try{
            for(let i=0;i<999;i++){
                q.enqueue(i)
            }
        }catch(ex){
            error=ex;
        }
        assert.equal(error,'overflow')
    })

    it('underflow',()=>{
        const q=new Queue();
        let error=null;
        try{
            q.dequeue()
        }catch(ex){
            error=ex
        }
        assert.equal(error,'underflow')
    })

    it('性能测试',()=>{
        const q=new Queue(1000000);
        const t=new Date().getTime()
        for(let i=0;i<1000000;i++){
            q.enqueue(i)
        }

        assert.equal(
            new Date().getTime()-t<50,
            true,
            '性能不达标'
        )
    })
})