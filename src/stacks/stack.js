class Node {
    constructor(value) {
        this.value = value;
        this.next = null
        //the node will be the block in the stack, which will always have a next reference of null, meaning adding up more elements will change its reference of next
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        //top and bottom are the "nodes" in the stack. It'll be instanced as an empty stack, therefore to allow push, pop and peek methods to play with the nodes of the stack
        this.length = 0; //empty stack
    }
    peek(){
        //peek allows us to select the node at the top of the stack
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
            //It's always relevant to validate the constitution of our data structure, like so in this case, that way we'll have better control of the workflow of our program and avoid bugs in the future
        } else {
            const formerTop = this.top;
            this.top = newNode;
            this.top.next = formerTop;
            // newNode.next = formerTop;
            // this.top = newNode;
            //this is how we add new nodes at the top of the stack, considering them like linked lists
        }
        this.length++; //increasing lists length

        return this;
    }

    //===TODO: pop()
}

const myStack = new Stack();
console.log(myStack)
