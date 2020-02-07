

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var k in this.storage[node]) {
    delete this.storage[k][node];
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode][toNode] !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
// Set the "value" of the edge key to point to the target node itself (for future convenience).
// It would work just fine if it was any other placeholder value, like true or whatever.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = this.storage[toNode];
  this.storage[toNode][fromNode] = this.storage[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var k in this.storage) {
    cb(k);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  addNode: O(1)
 *  contains: O(1) (we use a hash table)
 *  removeNode: O(n)
 *  hasEdge: O(1)
 *  addEdge: O(1)
 *  removeEdge: O(1)
 *  forEachNode: O(n)
 */


