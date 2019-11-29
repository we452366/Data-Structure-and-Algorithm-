function solve(arr,N){
    const s=new Set([arr.shift()%N]);
    while(arr.length>0){
        const ak=arr.shift();
        const items=[...s];
        items.forEach(x=>{
            s.add((x+ak)%N);
        })
        s.add(ak)
    }
    return s.has(0);
}