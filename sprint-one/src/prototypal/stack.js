var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.currentIndex = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.currentIndex] = value;
  this.currentIndex++;
};

stackMethods.pop = function() {
  var check = this.currentIndex;
  if (this.size()) {
    while (this.storage[check] === undefined) {
      check--;
    }
    var result = this.storage[check];
    delete this.storage[check];
    return result;
  } else {
    return undefined;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

