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
    };
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    };
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    };
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

}

const g = new Graph();
g.addVertex('tokyo');
g.addVertex('dallas');
g.addVertex('aspen');
g.addVertex('los angeles');
g.addVertex('hong kong');
g.addEdge('tokyo', 'dallas');
g.addEdge('dallas', 'aspen');
g.addEdge('hong kong', 'tokyo');
g.addEdge('hong kong', 'dallas');
g.addEdge('los angeles', 'hong kong');
g.addEdge('los angeles', 'aspen');

g.removeVertex('hong kong');
// g.removeEdge('tokyo','dallas');
// g.removeEdge('dallas','aspen');

console.log(g);