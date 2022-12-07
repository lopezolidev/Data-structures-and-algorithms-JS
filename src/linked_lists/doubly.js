class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head; //is almost the exact same code for a singly linked list

        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value); //instance the new node inside the append method
        newNode.prev = this.tail;
        //previous pointer points to the tail that exists already in the list
        
        this.tail.next = newNode;
        //storing the value of the new node in the next reference of the tail of the list
        
        this.tail = newNode; 
        //now the structure of the new node will be the tail of the current list

        this.length++; //increasing number of the total length of the list

        return this; //returning the total list
    }
    preppend(value){
        const newNode = new Node(value); //instance the new node inside the preppend method

        newNode.next = this.head; 
        //current head of the list will be the next ref of the new node

        this.head.prev = newNode;
        //new node is the previous ref of the current head of the list

        this.head = newNode;
        //modifying the current head of the list as the new node

        this.length++;
        //increasing the length of the list

        return this; //returning the list
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);

myDoublyLinkedList.append(2);

console.log(myDoublyLinkedList);

console.log(myDoublyLinkedList.preppend(0));