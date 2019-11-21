## 散列

### V8引擎的数组
> V8运行环境如果发现数组是稀疏的，会用一个散列结构去存储数组；如果发现数组是连续的，就会用连续的内部实现

### 常用的散列函数
- 处理整数：k=>k%M
- 处理浮点数：k=>binary_value(k)%M
```
    function binary_value(val){
        const farr=new Float32Array(1)
        farr[0]=val
        const intBytes=new Int8Array(farr.buffer)
        const view=new DataView(intBytes.buffer)
        return view.getUnit32()
    }
```
- 处理字符串：
```
    function h_str(str,M){
        return [...str].reduce((hash,c)=>{
            hash=(31*hash+c.charCodeAt(0))%M
            return hash
        },0)
    }
```

### 操作
- 插入：h(k)算出位置，然后将(k,v)对放置到对应的位置
- 删除：h(k)算出位置，然后在链表中找到对应的k，删除
- 查找：h(k)算出位置，然后在链表中找到对应的(k,v)对