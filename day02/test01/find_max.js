function find_max(arr){
    let max=Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        max=(arr[i]>max?arr[i]:max)
    }
    return max
}