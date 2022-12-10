//3 forms to represent graphs:

//Example of a graph

/*
     2 - 0
   /  \
  1 - 3
*/

//Edge list

const graph_EdgeList = [
    [0, 2],
    [2, 1],
    [2, 3],
    [1, 3]
]
//only draw connections from one node to the other without repeating connections

//Adjacent list 
    //                    0    2          1       3
const graph_AdjacentL = [[2], [1, 3, 0], [2, 3], [1, 2]]

const grap_AdjacentLObj = {
    0: [2],
    1: [2, 3],
    2: [1, 3, 0],
    3: [1, 2]
} //select the indexes of the the graph as their values and represent to which nodes the current node is connected. Similar to hash tables

//Adjacent Matrix

const graph_AdjacentMat = [
//   0  1  2  3    
    [0, 0, 1, 0], 
    [0, 1, 1, 0], 
    [1, 1, 0, 1], 
    [0, 1, 1, 0]
];

const graph_AdjacentMatObj = {
    0: [0, 0, 1, 0],
    1: [0, 1, 1, 0],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}
//indexes are the values of each node. The order of indexes = order of filling with 1's & 0's, 1 → connection with node. 0 → no connection