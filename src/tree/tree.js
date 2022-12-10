class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
        //left and right allows us to attach other nodes to this node
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
        //using insert we'll create the root element to attach as the root node
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            //no nodes in the tree, then root will be the new node
        } else {
            let currentNode = this.root;
            //taking as current node the root 
            while(true){
                //infinite loop until returnig of tree
                if (value < currentNode.value){
                    //comparing the new node value with current node's value
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        //abscence of node at the left of the root node will place the new node as the left
                        return this;
                    } else {
                        currentNode = currentNode.left;
                        //moving onto the next node at the left when there's existence on a node there
                    }
                } else {
                    if(!currentNode.right){
                        //same logic applies but when the new node's value is equal or greater than root node's value
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
    search(value, currentNode = this.root){
        //default parameter of currentNode is root node of the tree, even though it can be any other value found in the tree

        if(currentNode.value === null){
            //just to make sure the tree is not empty
            return undefined;
        } else if(value == currentNode.value){
            //fulfilling case when the the searched value is equal to the current node value
        
            return currentNode;
            //returning the found node
        } 
            else if (value < currentNode.value){
            //when the value provided is inferior to the current node's value
            
            currentNode = currentNode.left;
            //assigning current node the node on it's left (asuming we're working on a balanced tree)
            
            return this.search(value, currentNode);
            //now as the current node is the value on the left we'll return the same method but now with the updated node
        } 
            else if (value > currentNode.value){
            //same logic as described above but for a case when the value is superior to the current node's value
            
            currentNode = currentNode.right
            return this.search(value, currentNode);
        }
    }
    
}

const myTree = new BinarySearchTree();

console.log(myTree);
console.log(myTree.insert(10));
console.log(myTree.insert(9));
console.log(myTree.insert(24));
console.log(myTree.insert(5));
console.log(myTree.insert(11));
console.log(myTree.insert(31));
console.log(myTree.insert(26));
console.log(myTree)

console.log(myTree.search(24))