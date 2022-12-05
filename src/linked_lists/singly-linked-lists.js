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
    append(node){
        this.tail = node;
        this.head.next = this.tail;
        this.length++;
        //appending nodes at the end of the list
    }
}
//each singly linked list will start with one head as only node with mandatory value (as for this case), a tail (pointing to head) and a total length of 1

const mySinglyLinkedList = new MySinglyLinkedList(1);
console.log(mySinglyLinkedList);
// MySinglyLinkedList {
//     head: { value: 1, next: null },
//     tail: { value: 1, next: null },
//     length: 1
//   }

const node = new Node(3);
console.log(node);
// Node { value: 3, next: null }

console.log(mySinglyLinkedList.append(node));
console.log(mySinglyLinkedList)
// MySinglyLinkedList {
//     head: { value: 1, next: Node { value: 3, next: null } },
//     tail: Node { value: 3, next: null },
//     length: 2
//   }