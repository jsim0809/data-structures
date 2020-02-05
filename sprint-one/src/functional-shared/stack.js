var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.currentKey = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.currentKey] = value;
  this.currentKey++;
};

stackMethods.pop = function() {
  var check = this.currentKey;
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
