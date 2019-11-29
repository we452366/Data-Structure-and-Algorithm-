function select(node,path){
    if(path.length===0){return [node]}
    const p=path.shift();
    if(p.child){
        return select(node.children[p.child],[...path])
    }else if(p.op){
        return [...tree_transverse(node)]
        .filter(_n=>p.op(_n.node))
        .map(n=>n.node)
    }
}