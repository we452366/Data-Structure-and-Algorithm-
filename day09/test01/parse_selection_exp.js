function parse_selection_exp(expr){
    return expr.split(' ')
    .map(p=>{
        if(p.match(/^\d+$/)){
            return {child:parseInt(p)}
        }else{
            return {
                op:eval(`(x)=>x.v ${p.replace(/[\[\]]/g,'')}`)
            }
        }
    })
}