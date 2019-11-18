// 写成非递归
function fib(n) {
    return fib(n) = n > 2 ?
        fib(n - 1) + fib(n - 2) :
        1
}

// 非递归 动态规划
function fib(n){
    let a=1,
        b=1;
    for(let i=2;i<n;i++){
        const t=b;
        b=a+b;
        a=t
    }
    return b
}

// 非递归 堆栈
function fib(n){
    let stack=[n]
    while(stack.length){
        const item=stack.pop();
        if(item===1 || item===2){
            stack.push(1)
        }else{
            stack.push(item-1);
            stack.push(item-2);
        }
    }
}