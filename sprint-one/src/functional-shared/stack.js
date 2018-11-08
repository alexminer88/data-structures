var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {}
stackMethods.push = function(value) {
    	this.storage[Object.keys(this.storage).length] = value;

};
stackMethods.pop = function() {
    		var result = this.storage[Object.keys(this.storage).length - 1];
    		delete this.storage[Object.keys(this.storage).length - 1];
    		return result;    
};
stackMethods.size = function() {
    return Object.keys(this.storage).length;
};





