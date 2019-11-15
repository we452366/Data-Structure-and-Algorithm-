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
const Stack=require('../test01/stack')
function fib(n){
    const s=new Stack();
}