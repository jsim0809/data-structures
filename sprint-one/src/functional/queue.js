var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[currentKey] = value;
    currentKey++;
  };

  someInstance.dequeue = function() {
    var check = 0;
    if (Object.keys(storage).length) {
      while (storage[check] === undefined) {
        check++;
      }
      var result = storage[check];
      delete storage[check];
      return result;
    } else {
      return undefined;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  someInstance.debug = function() {
    return storage;
  };

  return someInstance;
};
