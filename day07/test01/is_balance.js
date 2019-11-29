function match(n,c){
    return (
        c=='[' && n==']'
    ) ||
    (
        c=='(' && n==')'
    )
}

function is_balance(str){
    const [first,...others]=str;
    const stack=[first];
    while(others.length>0){
        const c=stack[stack.length-1];
        const n=others.shift();
        if(!match(n,c)){
            stack.push(n)
        }else{
            stack.pop()
        }
    }
    return stack.length === 0;
}