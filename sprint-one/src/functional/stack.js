var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  //can i put an array in storage?
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;

  };

  someInstance.pop = function() {
    // objects has numerical keys, these dont change are not expected to change
    // return property with lowest numerical key because numerical keys are supposed to be used with the storage object
    // is correct, how do I find the highest numerical key? I am pretty sure that I could iterate and find the item with the lar
    // popping off is a O(1) operation
    // we can access the last item in the storage object because we know what the last item is, it sits at storage
    if (size > 0) {
      size--;
    }
    var result = storage[size];
    delete storage[size];
    return result;    
  };
  
  someInstance.size = function() {
    return size;
  };

  return someInstance;
};



// push a 0
// push b 1
// pop -> b 
// push c 1