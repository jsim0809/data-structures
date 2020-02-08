
// Uses prototypal instantiation.
var BinarySearchTree = function(value) {

  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);

  newBinarySearchTree.value = value;

  return newBinarySearchTree;

};

// Takes a value and sorts it into the binary search tree
BinarySearchTree.prototype.insert = function(value) {
  // Creates a new BinarySearchTree out of the given value
  var leaf = BinarySearchTree(value);

  // Checks if the value is smaller than the current BST's value
  // if smaller
  if (value < this.value) {

    // check if left exists
    if (this.left === undefined) {
      // if it does not, set the left property to the new BST
      this.left = leaf;
      // else, have the left node run insert(value).
    } else {
      this.left.insert(value);
    }
    // else if larger
  } else if (value > this.value) {
    // check if right exists
    if (this.right === undefined) {
      // if it does not, set the right property to the new BST
      this.right = leaf;
    } else {
      // else, have the right node run insert(value).
      this.right.insert(value);
    }
  }
  // else (if equal)
  // don't do anything.

};

BinarySearchTree.prototype.depthFirstLog = function() {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

