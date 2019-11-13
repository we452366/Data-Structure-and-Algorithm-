const {assert} = require('chai');
const Stack=require('./stack')

describe('测试链接',()=>{
    it('LIFO',()=>{
        const s =new Stack(1000)
        for(let i=1;i<=5;i++){
            s.push(i)
        }

        assert.equal(s.pop(),5)
        assert.equal(s.pop(),4)
        assert.equal(s.pop(),3)
        assert.equal(s.pop(),2)
        assert.equal(s.pop(),1)
    })

    it('stackoverflow',()=>{
        const s =new Stack(1000)
        try{
            for(let i=0;i<1001;i++){
                s.push(i)
            }
        }catch(ex){
            error=ex;
        }
        assert.equal(error,'stackoverflow')
    })

    it('stackoverflow-2',()=>{
        const s =new Stack(1000)
        try{
            for(let i=0;i<999;i++){
                s.push(i)
            }
        }catch(ex){
            error=ex;
        }
        assert.equal(error,'stackoverflow')
    })

    it('stackunderflow',()=>{
        const s=new Stack();
        let error=null;
        try{
            s.pop()
        }catch(ex){
            error=ex
        }
        assert.equal(error,'stackunderflow')
    })

    it('性能测试',()=>{
        const s=new Stack(1000000);
        const t=new Date().getTime()
        for(let i=0;i<1000000;i++){
            s.push(i)
        }

        assert.equal(
            new Date().getTime()-t<50,
            true,
            '性能不达标'
        )
    })
})