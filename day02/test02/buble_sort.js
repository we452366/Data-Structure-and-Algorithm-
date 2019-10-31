//let swap=require('./swap.js')
function buble_sort(A){
    // |---未排序---|---已排序的最大值---|
    // 初始 |------未排序------|i|
    for(let i=A.length;i>0;i--){
        for(let j=1;j<i;j++){
            if(A[j]<A[j-1]){
                swap(A,j,j-1)
            }
        }
        // 循环不变式成立
    }
    return A
}