function insertion_sort(A){
    for(
        let j=1;                    // 1
        j<A.length;                 // N
        j++){                       // N-1
        const key=A[j];             // N-1
        let i=j-1;                  // N-1
        while(i>=0 && A[i]>key){    // Mk
            A[i+1]=A[i];            // Mk-1
            i--;                    // Mk-1
        }
        A[i+1]=key                  // N-1
    }
}