var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  // Make newTree tree-like
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// Adds new child tree containing value into caller's children array
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
