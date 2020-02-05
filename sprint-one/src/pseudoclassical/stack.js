var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentIndex = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.currentIndex] = value;
  this.currentIndex++;
};

Stack.prototype.pop = function() {
  var check = this.currentIndex;
  if (this.size()) {
    while (this.storage[check] === undefined) {
      check--;
    }
    var result = this.storage[check];
    delete this.storage[check];
    return result;
  }
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};