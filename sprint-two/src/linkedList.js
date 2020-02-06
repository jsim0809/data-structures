var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // Appends value to tail and makes it the new tail
  list.addToTail = function(value) {
  };
  // Pops off the head and returns its value.
  // The second value is now the head
  list.removeHead = function() {
  };
  // Returns a boolean representing if
  // target is in linked list.
  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
