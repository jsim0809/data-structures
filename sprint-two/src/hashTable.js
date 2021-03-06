

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;

  // Create empty arrays (buckets) at each index of storage
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, LimitedArray(this._limit));
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var limit = this._limit;

  var bucket = this._storage.get(index);
  // Generate a new tuple
  var tuple = LimitedArray(2);
  tuple.set(0, k);
  tuple.set(1, v);

  var nextOpenIndex;

  for (var i = 0; i < this._limit; i++) {
    if (bucket.get(i) === undefined) {
      if (nextOpenIndex === undefined) {
        nextOpenIndex = i;
      }
    } else if (bucket.get(i).get(0) === k) {
      // Iterating through all tuples stored at bucket
      // Check if key matches and return associated value.
      bucket.get(i).set(1, v);
      return;
    }
  }

  // If value at k has not been overwritten, then push new tuple.
  bucket.set(nextOpenIndex, tuple);
  this._count++;
  if (this._count > (this._limit * 0.75)) {
    this.reHash(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  for (var i = 0; i < this._limit; i++) {
    // Iterating through all tuples stored at bucket
    if (bucket.get(i) !== undefined && bucket.get(i).get(0) === k) {
      // Check if key matches and return associated value.
      return bucket.get(i).get(1);
    }
  }

  // If k not found, this function will automatically return undefined

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //
  var bucket = this._storage.get(index);
  for (var i = 0; i < this._limit; i++) {
    // Iterating through all tuples stored at bucket
    if (bucket.get(i) !== undefined && bucket.get(i).get(0) === k) {
      // Check if key matches and return associated value.
      bucket.set(i, undefined);
      this._count--;
      if (this._count < (this._limit * 0.25)) {
        this.reHash(this._limit / 2);
      }
      return;
    }
  }
};

HashTable.prototype.reHash = function(newLimit) {
  var newStorage = LimitedArray(newLimit);
  // Create empty arrays (buckets) at each index of storage
  for (var i = 0; i < newLimit; i++) {
    newStorage.set(i, LimitedArray(newLimit));
  }
  var oldStorage = this._storage;
  this._storage = newStorage;
  this._limit = newLimit;
  this._count = 0;
  var hashTable = this;
  // pull out everything and ask the HashTable to insert it.
  oldStorage.each(function(bucket) {
    bucket.each(function(tuple) {
      if (tuple) {
        hashTable.insert(tuple.get(0), tuple.get(1));
      }
    });
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(n)
  retrieve: O(n)
  remove: O(n)

  When we implement the expanding capability, all 3 time complexities will appromixate to O(1).
 */


