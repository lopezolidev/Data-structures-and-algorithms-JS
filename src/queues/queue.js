class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
        //each node will have next and prev as null to chain new nodes
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        //head and tail are different elements
    }
    peek(){
        if(this.length === 0){
            return undefined
        } else {
            return this.head;
            //only one element to see when the queue is greater than 0, which for a queue must be the head
        }
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
            //when there're no nodes in the queue the new node must be the head and the tail at the same time
        } else if(this.length === 1){
            const formerNode = this.tail;
            newNode.next = formerNode;
            formerNode.prev = newNode;
            this.tail = newNode;
            //the enqueueing is pointed to the tail and references are made from the new node to the tail itself, allowing to add more elements referencing the tail
          } else {
            const formerQueue = this.tail;
            newNode.next = formerQueue;
            formerQueue.prev = newNode;
            this.tail = newNode;
            //the same code for when the length is greater than 1, this time as the tail is our last node, it also contains the reference to the rest of the queue.
        }
        this.length++;
        return this;
    }
    dequeue(){
        this.length--;
        //reducing the length of the list to trigger the following validation, if not a type erro will be triggered when 'this.head.prev' points to null, hence the latter doesn't have any reference in the queue

        if(this.length === 0){
            return undefined;
        } 
        const formerQueue = this.head.prev;
        //referencing the rest of the queue without the head        
        
        formerQueue.next = null;
        //releasing the next reference of the queue to the head

        this.head = formerQueue;
        //new head will be the former queue, which is in fact the queue without the previous head

        return this;
    }
}

let myQueue = new Queue();

console.log(myQueue)
console.log(myQueue.peek())
console.log(myQueue.enqueue(1))
console.log(myQueue.peek())
console.log(myQueue.enqueue(2))
console.log(myQueue.enqueue(3))
console.log(myQueue.enqueue(4))
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());


// ================== TEACHER'S SOLUTION ============================ //
class Node2 {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue2 {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value) {
      const newNode = new Node2(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
  
      return this;
    }
    dequeue() {
        this.length--;

        if(!this.first){
            return null;
        } else if(this.length === 1){
            this.first = this.first.next;
            this.last = this.first;
        }
        const restOfQueue = this.first.next;
        this.first = restOfQueue;
        
        return this;
    }
  }
  
  const myQueue2 = new Queue2();

  console.log(myQueue2.enqueue(1))
  console.log(myQueue2.enqueue(2))
  console.log(myQueue2.enqueue(3))

  console.log(myQueue2.dequeue())