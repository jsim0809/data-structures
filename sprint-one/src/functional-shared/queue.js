var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.currentKey = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.currentKey] = value;
  this.currentKey++;
};

queueMethods.dequeue = function() {
  var check = 0;
  if (this.size()) {
    while (this.storage[check] === undefined) {
      check++;
    }
    var result = this.storage[check];
    delete this.storage[check];
    return result;
  } else {
    return undefined;
  }

};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


