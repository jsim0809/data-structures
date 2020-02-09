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
  child.parent = this;
};

treeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeParent = function() {
  this.parent.children.splice(this.parent.children.indexOf(this), 1);
  this.parent = undefined;
};




/*
 * Complexity: What is the time complexity of the above functions?
 *  addChild: O(1)
 *  contains: O(n), where n represents the size of the overall Tree (and not the depth of the tree or the input size, for example).
 */
