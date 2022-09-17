class Queue{

    constructor(capacity){
        this.capacity=capacity;
        this.items=[];
        this.rear=-1;
        this.front=-1;
        
    }
    isFull(){
        if(this.front===0&&this.rear===this.capacity-1){
            return true;
        } else{
            return false;
        }
    }

    isEmpty(){
        if(this.front===-1&&this.rear===-1){
            return true;
        }
        return false;
    }
    enQueue(num){

        if(this.isFull()){
            console.log("Queue is full");
        }
        else{
            this.front=0;
            this.rear++;
            this.items[this.rear]=num;
        }

    }
    deQueue(){

        if(this.isEmpty()){
            console.log("Queue is empty");
        }
        else{
            //console.log(this.items[this.front]);
            
            if(this.front>=this.rear){
                this.front=-1;
                this.rear=-1;
            }
            else{
                this.front=this.front+1;
            }
        }

    }
    display(){
        if(this.isEmpty()){
        console.log("Empty");
        }
        else{
            
            for(var i=this.front;i<=this.rear;i++){

                console.log(this.items[i]);
            }
        }
    }
}
const q1=new Queue(5);
q1.enQueue(5)
q1.enQueue(3)
q1.display()
q1.deQueue()
q1.display();
//console.log(q1.front);

