// 递归
function flattern(arr){
    return [].concat(
        ...arr.map(x=>Array.isArray(x)?flattern(x):x)
    )
}

// 递归，可以用for去展平拿到想要的第几项，可以忽略后续的非展平项，保证性能
function *flattern(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            yield * flattern(arr[i])
        }else{
            yield arr[i]
        }
    }
}

// 使用堆栈实现非递归
function *flattern(arr){
    let stack=arr.slice.reverse();
    while(stack.length){
        const item=stack.pop();
        if(item.constructor===Array){
            stack=stack.concat(item)
        }else{
            yield item
        }
    }
}