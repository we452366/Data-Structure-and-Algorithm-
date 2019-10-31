function swap(A,i,j){
    [A[i],A[j]]=[A[j],A[i]];
}

function divide(A,p,r){
    const x=A[r-1];
    let i=p-1;
    for(let j=p;j<r-1;j++){
        if(A[j]<x){
            i++;
            swap(A,i,j);
        }
    }
    swap(A,i+1,r-1);
    return i+1;
}

function quick_sort(A,p=0,r){
    r = typeof r !== 'undefined' ? r : A.length;
    if(p<r-1){
        const q=divide(A,p,r);
        quick_sort(A,p,q);
        quick_sort(A,q+1,r)
    }
}