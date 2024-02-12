/*
Graph: A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. 

#4: 
Vertex : a node
Edge : Connection between nodes
Weighted/Unweighted - Values assigned to distances between vertices
Directed/Undirected - Directions assigned to distanced between vertices

#8-9:


 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}

const g = new Graph();
g.addVertex('tokyo');
g.addVertex(14);
g.adjacencyList["tokyo"].push('kochi');
console.log(g);