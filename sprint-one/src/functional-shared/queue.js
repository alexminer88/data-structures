var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.pointer = 0;
  someInstance.back = 0;
 _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function() {
  if (this.back > this.pointer) {
      var result = this.storage[this.pointer];
      delete this.storage[this.pointer];
      this.pointer++;
      return result
    }
};

queueMethods.size = function() {
	return this.back - this.pointer;
};


