class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    // Create a new node
    var node = new Node(val);
    // If the current head is null,
    if (this.head === null) {
      //  then set the head to point to new node
      this.head = node;
    }

    // Setting the pointer on the existing tail to the new node.
    // Set the 'previous' pointer on the new node to the existing tail.
    if (this.tail !== null) {
      this.tail.next = node;
      node.previous = this.tail;
    }

    // Set tail to the new node
    this.tail = node;
  }

  addToHead(val) {
    // Create a new node
    var node = new Node(val);
    // If the current head is null,
    if (this.tail === null) {
      //  then set the head to point to new node
      this.tail = node;
    }

    // Setting the pointer on the existing tail to the new node.
    // Set the 'previous' pointer on the new node to the existing tail.
    if (this.head !== null) {
      this.head.previous = node;
      node.next = this.head;
    }

    // Set tail to the new node
    this.head = node;
  }

  removeTail() {
    // If the list is empty
    if (this.tail === null) {
      //  Return undefined
      return;
    }
    // Make a result variable
    // Set the result variable to the value of the tail
    var tailValue = this.tail.value;
    // Set the tail to the second last node.
    this.tail = this.tail.previous || null;
    if (this.tail) {
      this.tail.next = null;
    }
    // Return the result variable.
    return tailValue;
  }

  removeHead() {
    // If the list is empty
    if (this.head === null) {
      //  Return undefined
      return;
    }
    // Make a result variable
    // Set the result variable to the value of the head
    var headValue = this.head.value;
    // Set the head to the second node.
    this.head = this.head.next || null;
    if (this.head) {
      this.head.previous = null;
    }
    // Return the result variable.
    return headValue;
  }

  // Returns a boolean representing if
  // target is in linked list.
  contains(target) {

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
  }

}

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};