
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

// Takes a value and returns a Boolean if value is contained in tree.
BinarySearchTree.prototype.contains = function(value) {
  // Both && and || result in the value of (exactly) one of their operands:
  // A && B returns the value A if A can be coerced into false; otherwise, it returns B.
  // A || B returns the value A if A can be coerced into true; otherwise, it returns B.
  return Boolean((value === this.value)
  || (this.left && this.left.contains(value))
  || (this.right && this.right.contains(value)));
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // Execute cb on the value of the current node
  cb(this.value);
  // If left node exists, execute left node's depthFirstLog method with cb as argument
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  // If right node exists, execute cb on right node's depthFirstLog method with cb as argument
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

