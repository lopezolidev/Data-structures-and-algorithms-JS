// 1 --> 2 --> 3 --> 4 --> 5 --> null
//what conceptually should happen

let singlyLinkedList = {
    head: {
    //head node
        value: 3,  //← value of the node
        next: { // ← pointer to next value, meaning the reference
            value: 7,
            next: {
                value: 2,
                next: {
                    value: 89,
                    next: {
                        value: 4,
                        next: null, // ← last reference, "null" allows us to create more nodes
                    }
                }
            }
        }
    }
}
//what should return

class Node {
    constructor(value){ //instance the node with a mandatory value, therefore impossible to create empty nodes
        this.value = value;
        this.next = null;
    }
}
//creating class node to not repeat the same structure every time we add a new node to the linked list

class MySinglyLinkedList {
    constructor(value){
       this.head = {
        value: value, //head will have its value that is mandatory to instance the class
        next: null, //first node as will be the head, will have null as next value, allowing to insert a tail
       };
        this.tail = this.head; //tail will be the same head as being the first and only node when instancing the class

        this.length = 1; //our first value
    }
    append(value){
        const newNode = new Node(value); //instancing the node class
        this.tail.next = newNode; //the next tail node will always be this new node → replacing the last null by adding the new node
        this.tail = newNode; //the actual tail will be the node
        this.length++; //summing the length value +1
    
        return this; //output of the method
    }

    // append(node){
    //     this.tail = node; //pointing the tail as the new node
    //     this.head.next = this.tail; //next value of the head will be the new node, the problem is that the new tail not always will link to the head, instead we must point to the previous tail
    //     this.length++;
    //     //appending nodes at the end of the list
    // } //previous logic

    preppend(value){
        const newNode = new Node(value); //instancing the new node

        newNode.next = this.head; //the next (pointer) of the new node will point to the head of the linked list
        this.head = newNode; //now the actual head of the linked list (remember this is a reference) will be the new node we instanced a little before
        this.length++; //summing the length value +1

        return this; //output of the method
    }

    search(index){
        let thisNode = this.head; //start by the head, acquiring properties and reference
        let validation = false; //flag
        while(validation === false) { //while loop, change the validation when coincidence arrives
            if(thisNode.value == index){ //comparing value with given index
                validation = true; //changing validation to brake the loop
                return thisNode; //returning the node we want to find
            } else {
                thisNode = thisNode.next; //if there's no match, next value will be the previous node.next
            }
        }
    }
    //now that we've the search algorithm it's time for the insertion algorithm

    insert(value, previous, next){ //we need a value for the new node, then a previous value and a next value
        const newNode = new Node(value); //instancing the new node
        const previousNode = this.search(previous);  //instancing the previous and next nodes ↓
        const nextNode = this.search(next); 

        newNode.next = nextNode; //the next node of the new node will be the node stored in nextNode
        previousNode.next = newNode; //the next node of the previous node will be the value stored in newNode
        this.length++; //summing the total length 

        return this //returning the whole object
    }

    //teacher's solution to insert new nodes:

    insertNewNode(index, value) { //we need the index where we want to insert the element and the value of the new node
        if(index >= this.length){
            const lastNode = new Node(value)
            return this.append(lastNode); //validating if the index of where we want to insert the new element is greater than the length of the list, therefore we'll append the new value as a tail
        }
        const newNode = new Node(value); //instance the new node
        const firstPointer = this.getTheIndex(index - 1); //this pointer will be our previous node
        //between these 2 pointers will be our new node
        const holdingPointer = firstPointer.next; //this one will be our next node, holded in memory to avoid garbage collector
        
        firstPointer.next = newNode; //attaching the new node to the next pointer of the first node
        newNode.next = holdingPointer; //holding pointer will be the next pointer of the new node

        this.length++; //increasing list length + 1

        return this; //returning the object
    }
    //now the teacher defined the getThisIndex method

    getTheIndex(index){
        let counter = 0; //counter will help us to determine the position of the node
        let currentNode = this.head; //singly linked lists have to be resorted from the head

        while(counter !== index){ //loop, when the counter is equal to the index it'll stop
            currentNode = currentNode.next; //moving to the next node
            counter++; //increasing the counter
        }
        return currentNode; //returning the node we're interested in
    }

    //challenge: remove method

    remove(index){
        if(index >= this.length){ //if the number is too big will delete the last node of the linked list 
            delete this.tail;
        }
        let previousNode = this.getTheIndex(index - 1); //previous node where will be the deletion
        let nextNode = this.getTheIndex(index + 1); //next node where will be the deletion

        previousNode.next = nextNode; //linking the previous node reference to the next node, which lacks the node of the given index. Therfore this node without linking will be taken away by the garbage collector
        
        this.length--; //reducing the length of the linked list 
        return this; //returning the link list
    }
}
//each singly linked list will start with one head as only node with mandatory value (as for this case), a tail (pointing to head) and a total length of 1

const mySinglyLinkedList = new MySinglyLinkedList(1);
// console.log(mySinglyLinkedList);
// MySinglyLinkedList {
//     head: { value: 1, next: null },
//     tail: { value: 1, next: null },
//     length: 1
//   }

// const node = new Node(3);
// console.log(node);
// Node { value: 3, next: null }

// console.log(mySinglyLinkedList.append(node));
// console.log(mySinglyLinkedList)
// MySinglyLinkedList {
//     head: { value: 1, next: Node { value: 3, next: null } },
//     tail: Node { value: 3, next: null },
//     length: 2
//   }

console.log(mySinglyLinkedList.append(2));
// console.log(mySinglyLinkedList)
// MySinglyLinkedList {
//     head: { value: 1, next: Node { value: 2, next: null } },
//     tail: Node { value: 2, next: null },
//     length: 2
//   }

console.log(mySinglyLinkedList.preppend(4))
// console.log(mySinglyLinkedList)
// MySinglyLinkedList {
//     head: Node { value: 4, next: { value: 1, next: [Node] } },
//     tail: Node { value: 2, next: null },
//     length: 3
//   }

// console.log(mySinglyLinkedList.search(2));
// //Node { value: 2, next: null }

// console.log(mySinglyLinkedList.search(1));
// //{ value: 1, next: Node { value: 2, next: null } }

// console.log(mySinglyLinkedList.search(4));
// Node {
//     value: 4,
//     next: { value: 1, next: Node { value: 2, next: null } }
//   }

console.log(mySinglyLinkedList.insert(5, 1, 2))
// console.log(mySinglyLinkedList)
// MySinglyLinkedList {
//     head: Node { value: 4, next: { value: 1, next: [Node] } },
//     tail: Node { value: 2, next: null },
//     length: 5
//   }

console.log(mySinglyLinkedList.insertNewNode(2, 6))
// console.log(mySinglyLinkedList)
// MySinglyLinkedList {
//     head: Node { value: 4, next: { value: 1, next: [Node] } },
//     tail: Node { value: 2, next: null },
//     length: 4
//   }

console.log(mySinglyLinkedList.remove(2))
// MySinglyLinkedList {
//     head: Node { value: 4, next: { value: 1, next: [Node] } },
//     tail: Node { value: 2, next: null },
//     length: 4
//   }