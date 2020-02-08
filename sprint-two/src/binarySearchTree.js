
// Uses prototypal instantiation.
var BinarySearchTree = function(value) {

  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);

  newBinarySearchTree.value = value;

  return newBinarySearchTree;

};


BinarySearchTree.prototype.insert = function() {

};

BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
