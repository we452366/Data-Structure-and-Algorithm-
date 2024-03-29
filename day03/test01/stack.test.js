const {assert} = require('chai');
const Stack=require('./stack')

describe('测试链接',()=>{
    it('LIFO',()=>{
        const s =new Stack(1000)
        for(let i=1;i<=5;i++){
            s.push(i)
        }

        for(let i=5;i>=1;i--){
            assert.equal(s.pop(),i)
        }
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