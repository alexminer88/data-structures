var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var pointer = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    if (back > pointer) {
      var result = storage[pointer];
      delete storage[pointer];
      pointer++;
      return result
    }
  };

  someInstance.size = function() {
    return back - pointer;
  }

  return someInstance;
};


