function bucket_sort(A,max){
    // a表示桶的数量，max是用户自定义需要桶的数量
    const a=max;
    // B表示桶 是一个a项的二维数组
    // 多留出一个桶用来盛放其他数字
    const B=[...Array(a+1)].map(x=>[])

    // 下标算法
    // 索引函数
    const indexFunc=(value)=>{
        const key=Math.floor(value/a);

        if(key>a){
            return a
        }
        
        return key
    }

    A.forEach(value=>{
        const idx=Math.floor(indexFunc(value))

        if(!B[idx]){
            throw new Error('桶脚标没有命中 index='+idx)
        }
        
        B[idx].push(value)
    })

    // 多维数组打平
    // 简便写法：eval(`[${[[1],[2,3],4,...]+''}]`)
    // return eval(`[${B+''}]`)
    // return B
    //   .filter(bucket=>{
    //     return bucket.length>0
    //   })
    //   .reduce((result,bucket)=>{
    //     return result.concat(bucket)
    //   },[])
    return [].concat(...B.map(bucket=>{
        return bucket.sort((x,y)=>x-y)
    }))
}