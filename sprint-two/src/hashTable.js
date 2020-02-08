

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);


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
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


