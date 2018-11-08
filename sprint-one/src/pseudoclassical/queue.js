var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.pointer = 0;
  this.back = 0;

};

Queue.prototype.enqueue = function (value) {
	this.storage[this.back] = value;
  	this.back++;
};
Queue.prototype.dequeue = function () {
	if (this.back > this.pointer) {
  	    var result = this.storage[this.pointer];
  	    delete this.storage[this.pointer];
  	    this.pointer++;
  	    return result
  	 }
};
Queue.prototype.size = function() {
	return this.back - this.pointer;
};


	

