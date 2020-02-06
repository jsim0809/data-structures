var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;
  // Appends value to tail and makes it the new tail
  list.addToTail = function (value) {
    // Create a new node
    var node = new Node(value);
    // If the current head is null,
    if (this.head === null) {
      //  then set the head to point to new node
      this.head = node;
    }
    // Setting the pointer on the existing tail to the new node.
    if (this.tail !== null) {
      this.tail.next = node;
    }
    // Set tail to the new node
    this.tail = node;
  };
  // Pops off the head and returns its value.
  // The second value is now the head
  list.removeHead = function () {
    // If the list is empty
    if (this.head === null) {
      //  Return undefined
      return undefined;
    }
    // Make a result variable
    // Set the result variable to the value of the head
    var headValue = this.head.value;
    // Set the head to the second node.
    this.head = this.head.next;
    // Return the result variable.
    return headValue;
  };

  // Returns a boolean representing if
  // target is in linked list.
  list.contains = function (target) {

    // Checks current node and matches with target
    var checkNode = function(node) {
      // If node pass was null, we've reached the tail
      if (node === null) {
        return false;
      }
      // If node contains target
      if (node.value === target) {
        // Were done
        return true;
      }
      // Otherwise, check the next node
      return checkNode(node.next);
    };

    // Start the recursion at head.
    return checkNode(this.head);
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *   addToTail: O(1)
 *   removeHead: O(1)
 *   contains: O(n)
 */
