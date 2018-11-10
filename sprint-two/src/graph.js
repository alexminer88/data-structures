

// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  graph.nodes = {};
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create new node with node value
  // node will have adjacency list
  this.nodes[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node].length !== 0){ 
    var edgeList = this.nodes[node];
    for (var i = 0; i < edgeList.length; i++){
      this.removeEdge(edgeList[i],node);
    }
  }
  delete this.nodes[node];
  //loop over all nodes
    //if this.nodes[key].includes[node]
      // this.nodes[key].splice([indexOf(node)],1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode] = this.nodes[fromNode].filter(el => el !== toNode);
  this.nodes[toNode] = this.nodes[toNode].filter(el => el !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addNode : O(1)
  .removeNode : O(n^2)
  .hasEdge : O(n)
  .addEdge : O(1)
  .removeEdge : O(n)
  .forEachNode : O(n)
 */


