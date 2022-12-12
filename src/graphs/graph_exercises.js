//challenge: 
// const graph = {
//     6: [1, 3],
//     1: [4, 3],
//     3: [5],
//     5: [4],
//     4: [8],
// }

class Node {
    constructor(value){
        this.value = value;
        this.connections = [];
    }
}

class Graph {
    constructor(){
        this.data = {};
        this.vertices = 0;
        this.edges = 0;
    }
    get(item){
        return this.data[item];
    }
    connect(value, index = value){
        //this method points to first searching and then creating the nodes regarding to the index
        if(this.vertices === 0){
            //if there're no nodes in the graph

            const newNode = new Node(value);
            //instancing the node

            this.data[newNode.value] = newNode.connections;
            //inside data → key: node's value; value: node's connections array
            
            this.vertices++;
            //only increasing vertices due to the presence only one node in the graph

            return this;
            //returning graph
        }
        if(value == index){
            //when both values are the same the method returns null
            return null;
        } 
        if(this.data[index]){
            //checking if such node to append the new node exists

            if(!this.data[index].some(i => i == value)){
                //each data[index] corresponds with an array of the other nodes that is connected. Method 'some' will return a boolean if there's any value in that array that is equal to the given value in the connect method
                
                //'!' will make the validation to be "if there's no reference equal to the value provided in the array of such object's connections do the next thing" ↓
                if(this.data[value]){
                    //if the node exists already

                    this.data[index].push(value);
                    //update of index's-node connections array

                    this.edges++;
                    //updating edges, as the given node of given value already exists
                } 
                else {
                    const newNode = new Node(value);
                    //this case the node's value provided doesn't exists, so it must be instanced

                    this.data[index].push(newNode.value);                                                     
                    //updating index's-node connections array with the value of the new node
                    
                    newNode.connections.push(index);                    
                    // updating connections array of new node with the index (pointed node)

                    this.data[newNode.value] = newNode.connections;
                    //inside data: new key → new node value; with value → new node connections array

                    this.edges++;
                    this.vertices++;
                    //updating new edges and vertices
                }
            }
        } else {
            return null;
            //when the given index doesn't exists
        }
        return this;
        //return the graph
    }
}

const myGraph = new Graph();

console.log(myGraph);

console.log(myGraph.connect(1))
console.log(myGraph.connect(1))
console.log(myGraph.connect(2, 1))
console.log(myGraph.connect(3, 1))
console.log(myGraph.connect(3, 2))

// ================ An easier form ↓

class GraphTeacher {
    constructor(){
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(value){
        if(!this.adjacentList[value]){
            this.adjacentList[value] = [];
            this.nodes++;
            return this;
        }    
    }
    addEdge(node1, node2){
        if(!(node1 || node2)){
            return null;
        } else {
            this.adjacentList[node1].push(node2);
            this.adjacentList[node2].push(node1);
            return this;
        }
    }
    removeVertex(node){
        if(this.adjacentList[node]){
            //if such node exists

            const maxKey = Object.keys(this.adjacentList).sort((a,b) => a - b).pop();
            //finding the max number that a key could have in the graph

            for(let i = 0; i <= maxKey; i++){
                //loop to resort trough the nodes in the graph

                if(this.adjacentList[i]){
                //if an specific node from the graph exists

                    let nodeIndex = this.adjacentList[i].findIndex(item => item == node)
                    //finding the index inside each connections array of that node

                    if(nodeIndex != -1){     
                        //only when findIndex methods results in success this code will trigger. Otherwise the findIndex methods return "-1" when there's no coincidence

                        this.adjacentList[i].splice(nodeIndex, 1);
                        //deleting that reference each connections array of that node we want to delete
                    }
                }
            }
            this.nodes--;
            //decreasing number of vertices

            delete this.adjacentList[node];
            //deleting also the node

            return this;
        }
    }
}

const myGraph2 = new GraphTeacher();

console.log(myGraph2)
console.log(myGraph2.addVertex(1))
console.log(myGraph2.addVertex(3))
myGraph2.addVertex(4)
myGraph2.addVertex(5)
myGraph2.addVertex(6)
myGraph2.addVertex(8)

console.log(myGraph2.addEdge(1, 6))
console.log(myGraph2.addEdge(1, 3))
console.log(myGraph2.addEdge(1, 4))
console.log(myGraph2.addEdge(3, 5))
console.log(myGraph2.addEdge(3, 6))
console.log(myGraph2.addEdge(5, 4))
console.log(myGraph2.addEdge(4, 8))

// GraphTeacher {
//     nodes: 6,
//     adjacetList: {
//       '1': [ 6, 3, 4 ],
//       '3': [ 1, 5, 6 ],
//       '4': [ 1, 5, 8 ],
//       '5': [ 3, 4 ],
//       '6': [ 1, 3 ],
//       '8': [ 4 ]
//     }
//   }

console.log(myGraph2.removeVertex(1))


//============== Graph by Adjacent Matrix ↓↓↓

class Graph_AdjacentMatrix {
    constructor(){
        this.nodes = 0;
        this.adjacentMat = {}
    }
    addVertex(value){
        if(!this.adjacentMat[value]){
            this.adjacentMat[value] = [];
            //nodes connections with other nodes
            let orderedNodes = Object.keys(this.adjacentMat).sort((a,b) => a - b)
            //ordering nodes keys 
            for (let index = 0; index < orderedNodes.length; index++) {
                this.adjacentMat[orderedNodes[index]]
                //stablishing ordered nodes's keys
            }
            this.nodes++;
            //increasing number of nodes

            return this;
            //returning graph with ordered nodes
        }
    }
    addEdge(node1, node2){
        let orderedNodes = Object.keys(this.adjacentMat).sort((a,b) => a - b);
        let maxNumber = orderedNodes.pop();
        //TODO ADD EDGES
        return this;
    }
}

const myGraphMat = new Graph_AdjacentMatrix();

console.log(myGraphMat)
console.log(myGraphMat.addVertex(3))
console.log(myGraphMat.addVertex(2))
console.log(myGraphMat.addVertex(0))
console.log(myGraphMat.addVertex(1))

console.log(myGraphMat.addEdge(0, 1))
console.log(myGraphMat.addEdge(0, 2))
console.log(myGraphMat.addEdge(1, 3))
console.log(myGraphMat.addEdge(2, 3))
// console.log(myGraphMat.addEdge(0, 2))