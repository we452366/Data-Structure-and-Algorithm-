// 写成非递归
function fib(n) {
    return fib(n) = n > 2 ?
        fib(n - 1) + fib(n - 2) :
        1
}