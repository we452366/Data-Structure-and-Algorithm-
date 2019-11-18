// 队列 实现广度优先搜索
function *breath_first_search(node){
    let queue=[node];
    while(queue.length>0){
        const item=queue.pop();
        yield item.tagName;
        for(let i=item.length-1;i>0;i--){
            queue.unshift(item.children[i])
        }
    }
}