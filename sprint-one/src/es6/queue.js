class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.pointer = 0;
  	this.back = 0;
  }
  enqueue(value) {
	  this.storage[this.back] = value;
  	this.back++;
  };
  dequeue() {
	  if (this.back > this.pointer) {
  	  var result = this.storage[this.pointer];
  	  delete this.storage[this.pointer];
      this.pointer++;
	    return result
    }
  };
  size() {
	  return this.back - this.pointer;
  };
}
