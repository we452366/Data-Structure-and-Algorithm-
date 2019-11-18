// 堆栈实现深度优先遍历
function depth_first_search(node){
    let stack=[node];
    while(stack.length>0){
        const item=stack.pop();
        for(let i=item.length-1;i>0;i--){
            stack.push(item.children[i])
        }
    }
}