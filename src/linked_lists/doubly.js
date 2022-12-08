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
    getTheIndex(index){ //send an index refering desired node position
        let counter = 0; //number that will be node's position
        let currentNode = this.head; //first node to resort

        while (counter !== index) { 
            currentNode = currentNode.next;
            //while index is different than counter the current node will become next node 
            counter++;
            //increase counter's value
        }
        return currentNode; //index of the desired node
    }
    insertNewNode(index, value){
        if(index >= this.length){ 
        //an index greater than current length of the list → new node will be the new tail
            const lastNode = new Node(value);
            return this.append(lastNode);
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        //first and holding pointers will be the nodes to reference the new node

        holdingPointer.prev = newNode;
        //pointing the holding pointer to the new node and not the first pointer

        newNode.next = holdingPointer;
        //new node will point as next the holding pointer, which already has the reference to the new node

        newNode.prev = firstPointer;
        //storing the reference in the newNode to the first pointer

        firstPointer.next = newNode
        //first pointer now will have the new node with the rest of the nodes chained


        this.length++;
        //increasing total length 

        return this;
        //returning the doubly linked list
    }
    removeNode(index){
        if(index <= 0){ 
            const newHead = this.head.next;
            this.head = newHead;
            this.length--;
            return this;
            //index less or equal to 0 → separating first element of the list from the rest of the list and using the the next node from the head for the new head
        } else if(index >= this.length){
            const lastNode = this.tail.prev;
            this.tail = lastNode;
            this.length--;
            return this;
            //last node will be the previous node and the new tail will be this new last node
        }
        //index will be the position of the node to be deleted

        let formerPointer = this.getTheIndex(index - 1);
        //previous pointer in reference to the index

        let latterPointer = this.getTheIndex(index + 1);
        //next pointer in reference to the index

        formerPointer.next = latterPointer;
        //pointing reference of the former pointer to the new latter pointer 

        latterPointer.prev = formerPointer;
        //same for the latter pointer

        this.length--;
        //decreasing length of the list
        
        return this;
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);

myDoublyLinkedList.append(2);

// console.log(myDoublyLinkedList);

myDoublyLinkedList.preppend(0);

myDoublyLinkedList.preppend(3);
myDoublyLinkedList.preppend(5);
myDoublyLinkedList.preppend(1);

console.log(myDoublyLinkedList);

myDoublyLinkedList.getTheIndex(4);

myDoublyLinkedList.insertNewNode(3, 29);
console.log(myDoublyLinkedList)

myDoublyLinkedList.removeNode(3);