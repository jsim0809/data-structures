class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.currentIndex = 0;
  }

  push(value) {
    this.storage[this.currentIndex] = value;
    this.currentIndex++;
  }

  pop() {
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
  }

  size() {
    return Object.keys(this.storage).length;
  }

}