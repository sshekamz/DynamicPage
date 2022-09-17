class Stack{

    constructor(){
        this.items=[];
        this.items.length=4;
        this.top=-1;

    }
    
    display(){

        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        
        for(var i=0;i<=this.top;i++){
            console.log(this.items[i]);
        }
    }
    isEmpty(){
            if(this.top===-1){
                return true;
            }
         }
    isFull(){
        //return this.items.length>= this.maxSize;
        if(this.top>=this.items.length){
            return true;
        }
    }
    push(num){
        if(this.isFull()){
             console.log("Stack is Full");
        }
        else{
            this.top++;
        this.items[this.top]=num;
        }
    }
    pop(){

        if(this.isEmpty()){
            return this.display();
        }
        else{
        --this.top;
    }

    }

}
const s1=new Stack();
s1.push(1);
s1.push(3);
s1.push(7);
s1.push(5);
//s1.push(2);
s1.display();
s1.pop()
s1.pop()
s1.pop();
s1.pop();
s1.pop();