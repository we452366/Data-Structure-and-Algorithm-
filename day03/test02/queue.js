class Queue{
    constructor(max=1000){
        this.max=max;
        this.data=new Array(max);
        this.head=0;
        this.tail=0;
        this.size=0;
    }
    enqueue(x){
        if(this.size===this.max){
            throw 'overflow'
        }
        this.data[this.tail]=x;
        this.size++;
        if(this.tail===this.max -1){
            this.tail=0
        }else{
            this.tail++;
        }
    }
    dequeue(){
        // underflow
        if(this.size === 0){
            throw 'underflow'
        }
        this.size--;
        const x=this.data[this.head];
        this.head++;
        return x
    }
    get length(){
        return this.size
    }
}

module.exports=Queue;