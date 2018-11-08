var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.pointer = 0;
  someInstance.back = 0;
  return someInstance;
};

var queueMethods = {
	enqueue : function(value) {
  		this.storage[this.back] = value;
  		this.back++;
	},

	dequeue : function() {
  	if (this.back > this.pointer) {
  	    var result = this.storage[this.pointer];
  	    delete this.storage[this.pointer];
  	    this.pointer++;
  	    return result
  	  }
	},
    size : function() {
		return this.back - this.pointer;
	}
};


