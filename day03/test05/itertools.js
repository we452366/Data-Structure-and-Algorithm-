const GeneratorFunction=Object.getPrototypeOf((function*(){})()).constructor;

GeneratorFunction.prototype.find=function(condition){
    let p=null;
    while(!(p=this.next()).done){
        if(condition(p.value)){
            return p.value
        }
    }
    return null;
}